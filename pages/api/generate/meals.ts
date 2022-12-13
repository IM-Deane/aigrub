import { Configuration, OpenAIApi } from "openai";
import { generateMealsPrompt } from "../../../utils/prompts";

const configuration = new Configuration({
	apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

// handles creation of the meals list
export default async function handler(req, res) {
	if (req.method === "POST") {
		const completion = await openai.createCompletion({
			model: "text-davinci-003",
			prompt: generateMealsPrompt(req.body.dietPreferences),
			temperature: 0.7,
			max_tokens: 256,
			top_p: 1,
			frequency_penalty: 0,
			presence_penalty: 0,
		});
		res.status(200).json({ result: completion.data.choices[0] });
	}
}
