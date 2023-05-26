import {DocumentClient} from "aws-sdk/clients/dynamodb";
import {NextApiRequest, NextApiResponse} from "next";

const dynamoDBClient = new DocumentClient();

const updateSEO = async (req: NextApiRequest, res: NextApiResponse) => {
    const {page, title, description, keywords, page_title} = req.body;


    const params = {
        TableName: "seo",
        Key: {
            page: page,
        },
        UpdateExpression: "set title = :title, description = :description, keywords = :keywords, page_title = :page_title",
        ExpressionAttributeValues: {
            ":title": title,
            ":description": description,
            ":keywords": keywords,
            ":page_title": page_title,
        },
        ReturnValues: "UPDATED_NEW"
    };

    try {
        await dynamoDBClient.update(params).promise();
        res.status(200).json({message: "SEO configuration updated successfully"});
    } catch (error) {
        res.status(500).json({error: "Error updating SEO configuration"});
    }
};

export default updateSEO;
