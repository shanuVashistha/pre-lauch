import { NextApiRequest, NextApiResponse } from 'next';
import { dynamoDB } from '@/utils/config/aws';
import { EmailService } from '@/services/emailService';
import { v4 as uuidv4 } from 'uuid';

type EnquiryDataType = {
    email: string;
    message: string;
};

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === 'POST') {
        const { email, message } = req.body;
        const enquiryData: EnquiryDataType = { email, message };

        try {
            const params = {
                TableName: 'enquiries',
                Item: {
                    id: uuidv4(),
                    email,
                    message,
                    is_email_delivered: false,
                    timestamp: new Date().toISOString(),
                },
            };

            await dynamoDB.put(params).promise();

            await EmailService.sendEmail({
                to: email,
                subject: 'Enquiry Confirmation',
                text: `Dear User,
Thank you for your enquiry. We have received your message and will get back to you as soon as possible.

Enquiry Details:
Email: ${email}
Message: ${message}

Best Regards,
Enjoy Mondays Team`,
            });

            const updateParams = {
                TableName: 'enquiries',
                Key: {
                    id: params.Item.id,
                },
                UpdateExpression: 'SET is_email_delivered = :is_email_delivered',
                ExpressionAttributeValues: {
                    ':is_email_delivered': true,
                },
            };

            await dynamoDB.update(updateParams).promise();
            console.log('is_email_delivered updated successfully');

            res.status(200).json({ success: true });
        } catch (error) {
            console.error(error);
            res.status(500).json({ success: false });
        }
    } else {
        res.status(405).json({ error: 'Method not allowed' });
    }
};

export default handler;
