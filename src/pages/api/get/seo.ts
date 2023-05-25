import {dynamoDB} from "@/utils/config/aws";
import {NextApiRequest, NextApiResponse} from "next";

const getSeo = async (req: NextApiRequest, res: NextApiResponse) => {
    const params = {
        TableName: "seo",
    };

    try {
        const data = await dynamoDB.scan(params).promise();
        res.status(200).json(data.Items);
    } catch (error) {
        res.status(500).json({error: "Error fetching Seo Config"});
    }
}

export default getSeo;