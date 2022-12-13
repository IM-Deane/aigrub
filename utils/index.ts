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

// convert a string into a valid URL (lowercase remove commas, replace spaces with dashes)
export const convertMealStringToURL = (mealString: string): string =>
	mealString.toLowerCase().replace(/,/g, "").replace(/\s+/g, "-");

// convert the meal URL to string with no dashes
export const convertURLToMealString = (url: string): string =>
	url.replace(/-/g, " ");
