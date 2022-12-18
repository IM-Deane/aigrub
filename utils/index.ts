import { mealKeywords } from "./enums";

import sample from "lodash.sample";

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

/**
 * selects 2-4 keywords from master keyword list
 *
 * @returns random list of keyword objects
 */
export const getRandomListOfKeywords = (): object[] => {
	let keywords: object[] = [];
	let count: number = 0;
	// random number from 1 - 4
	const numberOfKeywords: number = Math.floor(Math.random() * 4) + 1;

	// create mutable list of keys
	let categories = Object.keys(mealKeywords);

	// while length of keywords is less than numberOfKeywords
	do {
		count++;
		// pick random category
		const category: string = sample(categories);
		// pick random keyword from selected category
		const keyword: string = sample(mealKeywords[category]);

		// add keyword to list
		keywords.push({ key: count, label: keyword });
		// remove category from obj to ensure it's only selected once
		categories = categories.filter((c) => c !== category);
	} while (keywords.length < numberOfKeywords);

	return keywords;
};
