import multer from 'multer';
import { S3UploadService } from "@/services/upload";
import fs from 'fs';
import util from 'util';
import { dynamoDB } from "@/utils/config/aws";

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
                return res.status(400).json({ error: 'File size exceeds the limit of 4MB' });
            }
            return res.status(500).json({ error: err.message });
        } else if (err) {
            return res.status(500).json({ error: err.message });
        }

        const file = req.file;
        const id = req.body.id;
        const slug = req.body.slug;
        const title = req.body.title;
        const body = req.body.body;
        const meta_title = req.body.meta_title;
        const description = req.body.description;
        const meta_description = req.body.meta_description;
        const meta_keywords = req.body.meta_keywords;
        // const is_featured = req.body.is_featured;
        let imageLocation = req.body.file;

        try {
            if (file) {
                const buffer = await readFile(file.path);
                const result = await s3Service.uploadFile(file.originalname, buffer);
                await unlink(file.path);  // Delete the file after uploading it to S3
                imageLocation = result.Location;
            }

            const blog = {
                slug,
                title,
                body,
                meta_title,
                description,
                meta_description,
                meta_keywords,
                // is_featured,
                image: imageLocation,
            };

            const params = {
                TableName: 'blogs',
                Key: {
                    slug: slug
                },
                UpdateExpression: "set title = :title, id = :id,  body = :body, meta_title = :meta_title, description = :description, meta_description = :meta_description, meta_keywords = :meta_keywords, image = :image",
                ExpressionAttributeValues: {
                    ':title': title,
                    ':id': id,
                    ':body': body,
                    ':meta_title': meta_title,
                    ':description': description,
                    ':meta_description': meta_description,
                    ':meta_keywords': meta_keywords,
                    // ':is_featured': is_featured,
                    ':image': imageLocation
                },
                ReturnValues: "UPDATED_NEW"
            };

            await dynamoDB.update(params).promise();

            console.log('Blog updated:', blog);

            res.status(200).json({ message: 'Blog updated successfully' });
        } catch (error) {
            console.error('Error updating blog:', error);
            res.status(500).json({ error: 'Error updating blog' });
        }
    });
};
