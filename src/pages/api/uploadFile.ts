import multer from 'multer';
import { S3UploadService } from "@/services/upload";
import fs from 'fs';
import util from 'util';

const readFile = util.promisify(fs.readFile);
const unlink = util.promisify(fs.unlink);

const upload = multer({ dest: '/tmp' });
const s3Service = new S3UploadService();

export default async (req: any, res: any) => {
    upload.single('image')(req, res, async (err) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }

        const file = req.file;
        if (!file) {
            return res.status(400).send({ error: 'No file uploaded' });
        }


        try {
            const buffer = await readFile(file.path);
            const result = await s3Service.uploadFile(file.originalname, buffer);
            await unlink(file.path);  // Delete the file after uploading it to S3

            res.status(200).json({ success: 1, file: { url: result.Location } });
        } catch (error) {
            console.error('Error uploading file:', error);
            res.status(500).json({ success: 0, error: 'Error uploading file' });
        }
    });
};
