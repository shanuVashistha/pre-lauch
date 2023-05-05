import { NextApiRequest, NextApiResponse } from 'next';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '@/utils/Firebase';

type SignUpsDataType = {
    email: string;
};

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === 'POST') {
        const { email } = req.body;

        const signUps: SignUpsDataType = { email };

        try {
            const signUpsCollection = collection(db, 'signups');
            const docRef = await addDoc(signUpsCollection, signUps);
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
