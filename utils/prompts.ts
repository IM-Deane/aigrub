// create prompt that generates a list of meal ideas
export function generateMealsPrompt(dietPreferences): string {
	let prompt =
		"Create a list of meal ideas that adhere to the following dietary preferences.\n\n";

	// add new preference to the end of the string
	dietPreferences.forEach(({ label }) => {
		prompt += `Preference: ${label}\n`;
	});
	return prompt;
}

// create prompt for generating a recipe for the selected meal
export function generateRecipePrompt(meal: string): string {
	return `Create a simple recipe for this meal idea.\n\nMeal: ${meal}`;
}
