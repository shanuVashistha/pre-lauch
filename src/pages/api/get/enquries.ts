import { dynamoDB } from "@/utils/config/aws";
import { NextApiRequest, NextApiResponse } from "next";

const getAllBlogs = async (req: NextApiRequest, res: NextApiResponse) => {
    const params = {
        TableName: "enquiries",
    };

    try {
        const data = await dynamoDB.scan(params).promise();
        res.status(200).json(data.Items);
    } catch (error) {
        res.status(500).json({ error: "Error fetching Enquiries" });
    }
}

export default getAllBlogs;