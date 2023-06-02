import {NextApiRequest, NextApiResponse} from 'next';
import {openai} from "@/services/openAi";


export default async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        const prompt = `Please provide the approx salaries with highest salary for software developers with 8+ years of experience in London, working in enterprise companies and only need salary in number no year nothing else only result in number and i need only one highest result`;

        const response: any = await openai.createCompletion({
            model: "text-davinci-003",
            prompt: prompt,
            temperature: 1,
            max_tokens: 256,
            top_p: 1,
            frequency_penalty: 0,
            presence_penalty: 0,
        });

        // Extract the salary from the response
        const salary = String(response.data.choices[0].text).trim();
        console.log(salary)
        res.status(200).json({salary});
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({error: 'An error occurred'});
    }
};
