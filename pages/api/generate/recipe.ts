import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
	apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

// handles creation of the meals list
export default async function handler(req, res) {
	if (req.method === "POST") {
		console.log("prompt", generateRecipePrompt(req.body.meal));
		// const completion = await openai.createCompletion({
		// 	model: "text-davinci-003",
		// 	prompt: generateMealsPrompt(req.body.dietPreferences),
		// 	n: 3,
		// 	temperature: 0.7,
		// 	max_tokens: 256,
		// 	top_p: 1,
		// 	frequency_penalty: 0,
		// 	presence_penalty: 0,
		// });
		// console.log(completion);
		// res.status(200).json({ result: completion.data.choices[0].text });
		return res.status(200).json({ result: "success!" });
	}
}

// create prompt for generating a recipe for the selected meal
function generateRecipePrompt(meal) {
	return `Create a simple recipe for this meal idea.
    Meal: ${meal}
    `;
}
