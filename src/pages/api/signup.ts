import fs from 'fs';
import path from 'path';
import { NextApiRequest, NextApiResponse } from 'next';

type SignupData = {
    email: string;
    message: string;
};

const handler = (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === 'POST') {
        const { email, message } = req.body;
        const signupData: SignupData = { email, message };

        // Write signup data to a JSON file
        const dataFilePath = path.join(process.cwd(), 'src/data/', 'signups.json');
        const dataFileContent = fs.readFileSync(dataFilePath, 'utf-8');
        const existingData = dataFileContent ? JSON.parse(dataFileContent) : [];
        const newData = [...existingData, signupData];
        fs.writeFileSync(dataFilePath, JSON.stringify(newData));

        res.status(200).json({ success: true });
    } else {
        res.status(405).json({ error: 'Method not allowed' });
    }
}

export default handler;


export const config = {
    api: {
        externalResolver: true,
    },
};