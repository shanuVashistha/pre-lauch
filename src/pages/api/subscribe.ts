import fs from 'fs';
import path from 'path';
import { NextApiRequest, NextApiResponse } from 'next';

type Subscriber = {
    email: string;
};

const handler = (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === 'POST') {
        const { email } = req.body;

        const subscriber: Subscriber = { email };

        try {
            const filePath = path.join(process.cwd(), 'src/data/', 'subscribers.json');
            const fileData = fs.readFileSync(filePath, 'utf8');
            const subscribers: Subscriber[] = JSON.parse(fileData) || [];
            subscribers.push(subscriber);
            fs.writeFileSync(filePath, JSON.stringify(subscribers));
            res.status(201).json({ success: true });
        } catch (error) {
            console.error(error);
            res.status(500).json({ success: false });
        }
    } else {
        res.status(404);
    }
}
export default handler;

export const config = {
    api: {
        externalResolver: true,
    },
};