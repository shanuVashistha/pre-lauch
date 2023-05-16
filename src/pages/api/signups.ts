import { NextApiRequest, NextApiResponse } from 'next';
import { EmailService } from "@/services/emailService";
import { dynamoDB } from "@/utils/config/aws";
import { v4 as uuidv4 } from 'uuid';

type SignUpsDataType = {
    email: string;
};

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === 'POST') {
        const { email } = req.body;

        const signUps: SignUpsDataType = { email };

        try {
            const queryParams = {
                TableName: "signups",
                Key: {
                    email: email
                }
            };

            const existingSignup = await dynamoDB.get(queryParams).promise();
            if (existingSignup.Item) {
                res.status(400).json({ error: 'You Already Registered With Us.' });
                return;
            }

            const id = uuidv4();
            const params = {
                TableName: "signups",
                Item: {
                    id,
                    email,
                    timestamp: new Date().toISOString(),
                    is_email_delivered: false,
                },
            };

            await dynamoDB.put(params).promise();

            try {
                await EmailService.sendEmail({
                    to: email,
                    subject: 'Thanks for signing up!',
                    text: `Dear Job Seeker,
                    
Thank you for signing up with your email for our pre-launch page. We appreciate your interest in our upcoming service and are thrilled to have you as one of our early supporters.
We are working hard to create a platform that will help job seekers like you find their dream jobs quickly and easily. With your valuable input and feedback, we hope to make our service even better.

Thank you again for joining us on this exciting journey. We look forward to sharing more updates with you soon.`,
                });

                const updateParams = {
                    TableName: "signups",
                    Key: {
                        email: email
                    },
                    UpdateExpression: "SET is_email_delivered = :is_email_delivered",
                    ExpressionAttributeValues: {
                        ":is_email_delivered": true,
                    },
                };

                await dynamoDB.update(updateParams).promise();
                console.log('Email delivery status updated');
            } catch (error) {
                console.error('Error sending email', error);
                throw error;
            }

            res.status(200).json({ success: true });
        } catch (error) {
            console.error(error);
            res.status(500).json({ success: false });
        }
    } else {
        res.status(404);
    }
};

export default handler;
