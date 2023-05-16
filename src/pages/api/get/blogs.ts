import { dynamoDB } from "@/utils/config/aws";
import { NextApiRequest, NextApiResponse } from "next";

export async function getAllBlogs (req: NextApiRequest, res: NextApiResponse) {
    const params = {
        TableName: "blogs",
    };

    try {
        const data = await dynamoDB.scan(params).promise();
        res.status(200).json(data.Items);
    } catch (error) {
        res.status(500).json({ error: "Error fetching blogs" });
    }
}
