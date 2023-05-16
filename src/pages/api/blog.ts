import multer from 'multer';
import { S3UploadService } from "@/services/upload";
import fs from 'fs';
import util from 'util';
import { v4 as uuidv4 } from 'uuid';
import { dynamoDB } from "@/utils/config/aws";

const readFile = util.promisify(fs.readFile);
const unlink = util.promisify(fs.unlink);

const upload = multer({ dest: '/tmp' });
const s3Service = new S3UploadService();

export const config = {
    api: {
        bodyParser: false,
    },
};

export default async (req: any, res: any) => {
    upload.single('file')(req, res, async (err) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }

        const file = req.file;
        if (!file) {
            return res.status(400).send({ error: 'No file uploaded' });
        }

        const title = req.body.title;
        const slug = req.body.slug;
        const body = req.body.body;
        const meta_title = req.body.meta_title;
        const description = req.body.description;
        const meta_description = req.body.meta_description;
        const meta_keywords = req.body.meta_keywords;

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
                image: result.Location,
            };

            const params = {
                TableName: 'blogs',
                Item: blog,
            };

            await dynamoDB.put(params).promise();

            console.log('Blog saved:', blog);

            res.status(200).json({ message: 'File uploaded successfully', location: result.Location });
        } catch (error) {
            console.error('Error saving blog:', error);
            res.status(500).json({ error: 'Error uploading file' });
        }
    });
};

