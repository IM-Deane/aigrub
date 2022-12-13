import { useState } from "react";

import Layout from "../components/Layout";
import RecipeForm from "../components/RecipeForm";

const IndexPage = () => {
	const [meals, setMeals] = useState([]);

	const handleMeals = (mealData) => {
		// get meal text
		console.log(mealData);
		const mealList = mealData.map((meal) => meal.text);
		setMeals(mealList);
	};

	return (
		<Layout title="What should I eat tonight | Made by Alchemized Software">
			<div>
				<h1>What should I eat tonight?</h1>
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
			</div>
			<RecipeForm handleMeals={handleMeals} />
			{/* render meal list if it exists */}
			<div>
				{meals.length > 0 && (
					<ul>
						{meals.map((meal, index) => (
							<li key={index}>{meal}</li>
						))}
					</ul>
				)}
			</div>
		</Layout>
	);
};

export default IndexPage;