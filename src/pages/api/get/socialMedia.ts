import { dynamoDB } from "@/utils/config/aws";

export default async (req, res) => {
    if (req.method === 'GET') {
        try {
            // Fetch all social media records
            const params = {
                TableName: 'socialMedia',
            };

            const socialMediaResult = await dynamoDB.scan(params).promise();
            const socialMediaRecords = socialMediaResult.Items;

            // If no records were found, return an error
            if (!socialMediaRecords || socialMediaRecords.length === 0) {
                return res.status(404).json({ error: 'No social media records found.' });
            }

            // Prepare response object
            const responseObject = socialMediaRecords.reduce((obj, item) => {
                obj[item.type] = item.link;
                return obj;
            }, {});

            // Return social media records
            return res.status(200).json(responseObject);

        } catch (error) {
            console.error('Error fetching social media links:', error);
            return res.status(500).json({ error: 'Error fetching social media links.' });
        }
    } else if (req.method === 'POST') {
        // Handle the POST method logic here if needed
    } else {
        // Handle any other HTTP method
        res.setHeader('Allow', ['GET']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
};
