import { NextApiRequest, NextApiResponse } from "next";
import { dynamoDB } from "@/utils/config/aws";

export async function getBlogBySlug (req: NextApiRequest, res: NextApiResponse) {
    const { slug } = req.query;

    const params = {
        TableName: "blogs",
        Key: {
            slug: slug,
        },
    };

    try {
        const data = await dynamoDB.get(params).promise();
        res.status(200).json(data.Item);
    } catch (error) {
        res.status(500).json({ error: "Error fetching blog" });
    }
}
