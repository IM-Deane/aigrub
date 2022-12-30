import openai from "../utils/openai";
import { generateMealsPrompt, generateRecipePrompt } from "../utils/prompts";

/**
 * @summary fetches a list of meal ideas generated by openai
 * @param dietPreferences a list of ingredients/keywords used to define prompt
 * @returns string containing an ordered list of (normally ten) meal ideas
 */
export async function getMeals(dietPreferences: string[]): Promise<string> {
	const response = await openai.createCompletion({
		model: "text-davinci-003",
		prompt: generateMealsPrompt(dietPreferences),
		temperature: 0.7,
		max_tokens: 256,
		top_p: 1,
		frequency_penalty: 0,
		presence_penalty: 0,
	});
	return response.data.choices[0].text;
}

/**
 * @summary generate an image of a meal using openai
 * @param mealName the meal being created
 * @returns string containing an Image URL
 */
export async function getMealImage(mealName: string): Promise<string> {
	const response = await openai.createImage({
		prompt: mealName,
		n: 1,
		size: "512x512",
	});
	return response.data.data[0].url;
}

/**
 * @summary fetch a recipe and ingredient list for the provided meal
 * @param mealName meal the recipe is being created for
 * @returns string containing the ingredient list and recipe instructions
 */
export async function getRecipe(mealName: string) {
	const response = await openai.createCompletion({
		model: "text-davinci-003",
		prompt: generateRecipePrompt(mealName),
		temperature: 0.7,
		max_tokens: 256,
		top_p: 1,
		frequency_penalty: 0,
		presence_penalty: 0,
	});
	return response.data.choices[0].text;
}