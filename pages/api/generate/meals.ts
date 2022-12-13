import { Configuration, OpenAIApi } from "openai";

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
			n: 1, // number of meals to generate
			temperature: 0.7,
			max_tokens: 256,
			top_p: 1,
			frequency_penalty: 0,
			presence_penalty: 0,
		});
		res.status(200).json({ result: completion.data.choices[0] });
	}
}

// create prompt that generates a list of meal ideas
function generateMealsPrompt(dietPreferences) {
	let prompt =
		"Create a list of meal ideas that adhere to the following dietary preferences.\n\n";

	// add new preference to the end of the string
	dietPreferences.forEach(({ label }) => {
		prompt += `Preference: ${label}\n`;
	});
	return prompt;
}
