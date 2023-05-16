import AWS from 'aws-sdk';
import { ManagedUpload } from 'aws-sdk/clients/s3';

export class S3UploadService {
    private s3: AWS.S3;

    constructor () {
        AWS.config.update({
            accessKeyId: process.env.AWS_ACCESS_KEY,
            secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
            region: process.env.AWS_REGION,
        });

        this.s3 = new AWS.S3();
    }

    async uploadFile (key: string, body: Buffer): Promise<ManagedUpload.SendData> {
        const params = {
            Bucket: process.env.AWS_BUCKET_NAME,
            Key: key,
            Body: body,
            ACL: 'public-read',
        };

        try {
            return await this.s3.upload(params).promise();
        } catch (error) {
            console.error('Error uploading file to S3:', error);
            throw error;
        }
    }
}
