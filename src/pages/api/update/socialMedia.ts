import { dynamoDB } from "@/utils/config/aws";

export default async (req: any, res: any) => {
    if (req.method === 'POST') {
        const socialMediaParams = req.body;

        // Check if all fields are provided
        if (!socialMediaParams) {
            return res.status(400).json({ error: 'Social media params are required.' });
        }

        try {
            // Iterate over each social media param and update the database
            for (const [type, link] of Object.entries(socialMediaParams)) {
                // Fetch the socialMedia record
                const params = {
                    TableName: 'socialMedia',
                    Key: {
                        type: type,
                    },
                };

                const socialMediaResult = await dynamoDB.get(params).promise();
                const socialMediaRecord = socialMediaResult.Item;

                // Check if record exists
                if (!socialMediaRecord) {
                    return res.status(400).json({ error: `Record not found for type: ${type}` });
                }

                // Update the social media link in the database
                const updateParams = {
                    TableName: 'socialMedia',
                    Key: {
                        type: type,
                    },
                    UpdateExpression: 'set link = :link',
                    ExpressionAttributeValues: {
                        ':link': link,
                    },
                    ReturnValues: 'UPDATED_NEW',
                };

                await dynamoDB.update(updateParams).promise();
            }

            return res.status(200).json({ message: 'Social media links updated successfully.' });

        } catch (error) {
            console.error('Error updating social media links:', error);
            return res.status(500).json({ error: 'Error updating social media links.' });
        }
    } else {
        // Handle any other HTTP method
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
};
