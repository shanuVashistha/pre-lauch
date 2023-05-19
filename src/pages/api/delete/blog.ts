import { NextApiRequest, NextApiResponse } from 'next';
import { dynamoDB } from "@/utils/config/aws";


const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    const { slug } = req.query;

    if (req.method === 'DELETE') {
        const params = {
            TableName: 'blogs',
            Key: {
                slug
            }
        };

        try {
            const data = await dynamoDB.delete(params).promise();
            res.status(200).json({ success: true, data });
        } catch (error) {
            res.status(500).json({ success: false, error: error.message });
        }
    } else {
        res.status(400).json({ success: false, error: 'Invalid request method' });
    }
};

export default handler;
