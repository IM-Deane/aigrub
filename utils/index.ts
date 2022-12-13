// clean up and format the text from the choices response
export function cleanMealData(mealDataText: string): string[] {
	// remove '\n' from string; split string by pattern [X.] (ex. 1. Pizza 2. Pasta)
	const tempList = mealDataText.replace(/\r?\n|\r/g, "").split(/[0-9.]/g);
	// remove blank elements from list; trim each string
	const choiceList = tempList
		.filter((meal) => meal !== "")
		.map((meal) => meal.trim());
	return choiceList;
}
