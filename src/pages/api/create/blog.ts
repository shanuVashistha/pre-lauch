import multer from 'multer';
import {S3UploadService} from "@/services/upload";
import fs from 'fs';
import util from 'util';
import {v4 as uuidv4} from 'uuid';
import {dynamoDB} from "@/utils/config/aws";

const readFile = util.promisify(fs.readFile);
const unlink = util.promisify(fs.unlink);

const upload = multer({
    dest: '/tmp',
    limits: {
        fileSize: 4 * 1024 * 1024, // 4MB limit (in bytes)
    },
    fileFilter: (req, file, cb) => {
        const allowedExtensions = ['.png', '.jpg', '.jpeg', '.webp'];
        const ext = file.originalname.toLowerCase().match(/\.\w+$/);
        if (ext && allowedExtensions.includes(ext[0])) {
            cb(null, true); // Accept the file
        } else {
            cb(new Error('Only .png, .jpg, .jpeg, and .webp files are allowed'));
        }
    },
});

const s3Service = new S3UploadService();

export const config = {
    api: {
        bodyParser: false,
    },
};

export default async (req: any, res: any) => {
    upload.single('file')(req, res, async (err) => {
        if (err instanceof multer.MulterError) {
            if (err.code === 'LIMIT_FILE_SIZE') {
                return res.status(400).json({error: 'File size exceeds the limit of 4MB'});
            }
            return res.status(500).json({error: err.message});
        } else if (err) {
            return res.status(500).json({error: err.message});
        }

        const file = req.file;
        if (!file) {
            return res.status(400).send({error: 'No file uploaded'});
        }

        const title = req.body.title;
        const slug = req.body.slug;
        const body = req.body.body;
        const meta_title = req.body.meta_title;
        const description = req.body.description;
        const meta_description = req.body.meta_description;
        const meta_keywords = req.body.meta_keywords;
        const created_by = req.body.created_by
        // const is_featured = req.body.is_featured;
        // status:string = "draft, publish, archive", published_at:date, created_at:date, updated_at:date, is_active:boolean, is_featured:boolean

        try {
            const buffer = await readFile(file.path);
            const result = await s3Service.uploadFile(file.originalname, buffer);
            await unlink(file.path);  // Delete the file after uploading it to S3

            const blog = {
                id: uuidv4(),
                title,
                slug,
                body,
                meta_title,
                description,
                meta_description,
                meta_keywords,
                // is_featured,
                created_by,
                image: result.Location,
            };

            const params = {
                TableName: 'blogs',
                Item: blog,
            };

            await dynamoDB.put(params).promise();

            console.log('Blog saved:', blog);

            res.status(200).json({message: 'Blog Created successfully'});
        } catch (error) {
            console.error('Error saving blog:', error);
            res.status(500).json({error: 'Unexpected Error'});
        }
    });
};

