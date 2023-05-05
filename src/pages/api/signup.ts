import { NextApiRequest, NextApiResponse } from 'next';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '@/utils/Firebase';

type SignupData = {
    email: string;
    message: string;
};

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === 'POST') {
        const { email, message } = req.body;
        const signupData: SignupData = { email, message };

        try {
            const signupCollection = collection(db, 'signups');
            await addDoc(signupCollection, signupData);

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
