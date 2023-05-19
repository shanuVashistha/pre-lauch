import { dynamoDB } from "@/utils/config/aws";
import bcrypt from 'bcrypt';

export default async (req: any, res: any) => {
    if (req.method === 'POST') {
        const { username, currentPassword, newPassword } = req.body;

        // Check if all fields are provided
        if (!username || !currentPassword || !newPassword) {
            return res.status(400).json({ error: 'Username, Current password, and New password are required.' });
        }

        try {
            // Fetch the user
            const params = {
                TableName: 'users',
                Key: {
                    username: username,
                },
            };

            const userResult = await dynamoDB.get(params).promise();
            const user = userResult.Item;

            // Check if user exists
            if (!user) {
                return res.status(400).json({ error: 'User not found.' });
            }

            // Check if the old password matches the user's current password
            const isMatch = await bcrypt.compare(currentPassword, user.password);
            if (!isMatch) {
                return res.status(400).json({ error: 'Old password is incorrect.' });
            }

            // Hash the new password
            const hashedPassword = await bcrypt.hash(newPassword, 10);

            // Update the user's password in the database
            const updateParams = {
                TableName: 'users',
                Key: {
                    username: username,
                },
                UpdateExpression: 'set password = :password',
                ExpressionAttributeValues: {
                    ':password': hashedPassword,
                },
                ReturnValues: 'UPDATED_NEW',
            };

            await dynamoDB.update(updateParams).promise();

            return res.status(200).json({ message: 'Password updated successfully.' });

        } catch (error) {
            console.error('Error updating password:', error);
            return res.status(500).json({ error: 'Error updating password.' });
        }
    } else {
        // Handle any other HTTP method
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
};
