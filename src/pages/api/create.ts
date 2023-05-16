import { NextApiRequest, NextApiResponse } from 'next';
import bcrypt from 'bcrypt';
import { dynamoDB } from "@/utils/config/aws";
import { v4 as uuidv4 } from 'uuid';

export default async function handler (req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'POST') {
        return res.status(405).end(); // Method Not Allowed
    }

    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(400).json({ message: "Username and password are required" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const params = {
        TableName: 'users',
        Item: {
            "id": uuidv4(),
            "username": username,
            "password": hashedPassword
        }
    };

    try {
        await dynamoDB.put(params).promise();
        return res.status(201).json({ message: "User created" }); // Created
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Internal server error" }); // Internal Server Error
    }
}
