import { NextApiRequest, NextApiResponse } from 'next';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '@/utils/Firebase';

export const config = {
    runtime: 'edge',
}

type Subscriber = {
    email: string;
};

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === 'POST') {
        const { email } = req.body;

        const subscriber: Subscriber = { email };

        try {
            const subscribersRef = collection(db, 'subscribers');
            const docRef = await addDoc(subscribersRef, subscriber);
            res.status(201).json({ success: true, data: docRef });
        } catch (error) {
            console.error(error);
            res.status(500).json({ success: false });
        }
    } else {
        res.status(404);
    }
};

export default handler;
