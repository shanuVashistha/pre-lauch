import {dynamoDB} from "@/utils/config/aws";
import {NextApiRequest, NextApiResponse} from "next";

const getAllBlogs = async (req: NextApiRequest, res: NextApiResponse) => {
    const {page = '1', limit = '10', withoutPagination} = req.query;

    const parsedPage = Number(page);
    const parsedPageSize = Number(limit);

    if (withoutPagination === 'true') {
        const params = {
            TableName: "blogs",
        };

        try {
            const data = await dynamoDB.scan(params).promise();
            res.status(200).json(data.Items);
        } catch (error) {
            res.status(500).json({error: "Error fetching blogs"});
        }
    } else {
        const startIndex = (parsedPage - 1) * parsedPageSize;

        const params: any = {
            TableName: "blogs",
            Limit: parsedPageSize,
            ScanIndexForward: true,
        };

        try {
            let data: any = await dynamoDB.scan(params).promise();
            let paginatedData = data.Items;
            let totalPages = Math.ceil(data.Count / parsedPageSize);
            
            // Check if there are more items to fetch
            while (data.LastEvaluatedKey && paginatedData.length < parsedPageSize) {
                // Set the exclusive start key to continue pagination
                params.ExclusiveStartKey = data.LastEvaluatedKey;

                // Fetch the next page of data
                data = await dynamoDB.scan(params).promise();

                // Append the newly fetched items to the existing paginatedData array
                paginatedData = paginatedData.concat(data.Items.slice(0, parsedPageSize - paginatedData.length));
            }

            paginatedData = paginatedData.slice(startIndex, startIndex + parsedPageSize);

            res.status(200).json({
                page: parsedPage,
                pageSize: parsedPageSize,
                totalItems: data.Count,
                totalPages: totalPages,
                data: paginatedData,
            });
        } catch (error) {
            res.status(500).json({error: "Error fetching blogs"});
        }
    }
};

export default getAllBlogs;
