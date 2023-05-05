import { NextApiRequest, NextApiResponse } from 'next';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '@/utils/Firebase';

type SubscribeDataType = {
    email: string;
    message: string;
};

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === 'POST') {
        const { email, message } = req.body;
        const subscribeData: SubscribeDataType = { email, message };

        try {
            const subscribeCollection = collection(db, 'subscribes');
            await addDoc(subscribeCollection, subscribeData);

            res.status(200).json({ success: true });
        } catch (error) {
            console.error(error);
            res.status(500).json({ success: false });
        }
    } else {
        res.status(405).json({ error: 'Method not allowed' });
    }
}

export default handler;
