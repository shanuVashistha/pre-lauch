import {NextApiRequest, NextApiResponse} from 'next';
import bcrypt from 'bcrypt';
import {dynamoDB} from '@/utils/config/aws';
import {v4 as uuidv4} from 'uuid';
import {EmailService} from '@/services/emailService';
import {getEditorInvitationTemplate} from "@/email/invite";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'POST') {
        return res.status(405).end();
    }

    const {password, phone, email, first_name, last_name, role, status} = req.body;

    const name: string = `${first_name} ${last_name}`;

    // Generate a unique username
    const username: string = await generateUniqueUsername(name);

    const hashedPassword = await bcrypt.hash(password, 10);

    const params = {
        TableName: 'users',
        Item: {
            id: uuidv4(),
            username: username,
            password: hashedPassword,
            phone: phone,
            email: email,
            name: name,
            role: role,
            status: status
        },
    };

    try {
        await dynamoDB.put(params).promise();

        const emailBody: any = getEditorInvitationTemplate(name, username, password);

        await EmailService.sendEmail({
            to: email,
            subject: 'Invitation to join our platform as an Editor',
            html: emailBody,
        });

        return res.status(201).json({message: 'User created'}); // Created
    } catch (error) {
        console.error(error);
        return res.status(500).json({message: 'Internal server error'}); // Internal Server Error
    }
}

// Function to generate a unique username based on the user's name
async function generateUniqueUsername(name: string): Promise<string> {
    // Remove any non-alphanumeric characters from the name and convert to lowercase
    const username = name.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

    // Append a random number to the username to make it unique
    const randomNum: number = Math.floor(Math.random() * 10000);
    const uniqueUsername: string = `${username}${randomNum}`;

    // Check if the generated username already exists in the database
    const usernameExists: boolean = await checkUsernameExists(uniqueUsername);

    // If the generated username already exists, recursively generate a new username
    if (usernameExists) {
        return generateUniqueUsername(name);
    }

    return uniqueUsername;
}

// Function to check if the username already exists in the database
async function checkUsernameExists(username: string): Promise<boolean> {
    const params = {
        TableName: 'users',
        FilterExpression: 'username = :username',
        ExpressionAttributeValues: {
            ':username': username,
        },
    };

    try {
        const data: any = await dynamoDB.scan(params).promise();
        return data.Count > 0;
    } catch (error) {
        console.error(error);
        throw error;
    }
}
