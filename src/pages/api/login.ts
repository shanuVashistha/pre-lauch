import { NextApiRequest, NextApiResponse } from 'next';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { dynamoDB } from "@/utils/config/aws";

const jwtSecret: any = process.env.JWT_SECRET;

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method !== 'POST') {
        return res.status(405).end();
    }

    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(400).json({ message: "Username and password are required" });
    }

    try {
        const params = {
            TableName: 'users', // Set your DynamoDB table name
            Key: { "username": username }
        };

        const user = await dynamoDB.get(params).promise();
        if (!user || !user.Item) {
            return res.status(404).json({ message: "User not found" });
        }

        const match = await bcrypt.compare(password, user.Item.password);

        if (!match) {
            return res.status(401).json({ message: "Invalid password" });
        }

        const token = jwt.sign({ username: user.Item.username }, jwtSecret, {
            expiresIn: '24h',
        });
        return res.status(200).json({ message: "Login successful", token });

    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Internal server error" });
    }
}

export default handler;
