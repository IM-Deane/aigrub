import { useState } from "react";

import Link from "next/link";

import Grid from "@mui/material/Grid";

import Layout from "../components/Layout";
import RecipeForm from "../components/RecipeForm";

import { cleanMealData, convertMealStringToURL } from "../utils";

const IndexPage = () => {
	const [meals, setMeals] = useState([]);

	const handleMeals = (mealData) => {
		// get formatted list of meals in alphabetical order
		const newList = cleanMealData(mealData.text).sort();
		setMeals(newList);
	};

	return (
		<Layout title="What should I eat tonight | Made by Alchemized Software">
			<Grid container spacing={4} sx={{ mt: 5 }}>
				<Grid item xs={12}>
					<h1>What should I eat tonight?</h1>
				</Grid>
				<Grid item md={6} xs={12}>
					<p>
						Introducing <em>What Should I Eat Tonight?</em>, the ultimate recipe
						idea generator meant to save you time and help you create delicious,
						home cooked meals.
					</p>
					<p>
						As of now, you'll never have to worry about what to make for dinner!
					</p>
					<p>
						Try <em>What Should I Eat Tonight?</em> today and start cooking up
						something delicious!
					</p>
				</Grid>
				<Grid item md={6} xs={12}>
					<RecipeForm handleMeals={handleMeals} />
				</Grid>
				{/* render meal list if it exists */}
				<Grid item xs={12}>
					<h2>Meal ideas:</h2>
					{meals.length > 0 && (
						<ul>
							{/* TODO: add link to new page */}
							{meals.map((meal, index) => (
								<li key={index}>
									<Link href={`/recipes/${convertMealStringToURL(meal)}`}>
										{meal}
									</Link>
								</li>
							))}
						</ul>
					)}
				</Grid>
			</Grid>
		</Layout>
	);
};

export default IndexPage;
