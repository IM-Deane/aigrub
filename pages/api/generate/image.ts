import { Configuration, OpenAIApi } from "openai";
import { generateMealsPrompt } from "../../../utils/prompts";

const configuration = new Configuration({
	apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

// handles creation of the meals list
export default async function handler(req, res) {
	if (req.method === "POST") {
		const response = await openai.createImage({
			prompt: req.body.meal,
			n: 1,
			size: "512x512",
		});
		res.status(201).json({ result: response.data.data[0].url });
	}
}
