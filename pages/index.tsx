import { useState } from "react";

import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";

import SmartToyIcon from "@mui/icons-material/SmartToy";

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
		<Layout title="AiGrub | Making Meal Time Fun, Fast and Flavorful with AI!">
			<Grid container spacing={4} sx={{ my: 5 }}>
				<Grid item xs={12}>
					<Typography
						component="h1"
						variant="h3"
						sx={{ display: "flex", alignItems: "center" }}
					>
						AiGrub
						<span>
							<img
								src="/images/logo.png"
								alt="AiGrub logo"
								style={{ width: "48px", height: "48px", marginLeft: "10px" }}
							/>
						</span>
					</Typography>
					<Typography
						component="small"
						variant="subtitle1"
						sx={{ fontStyle: "italic" }}
					>
						Making Meal Time Fun, Fast and Flavorful with AI!
					</Typography>
				</Grid>
				<Grid item md={6} xs={12}>
					<Typography variant="body1" paragraph gutterBottom>
						AiGrub is the perfect solution for making delicious, fun, and
						time-saving recipes.
					</Typography>
					<Typography variant="body1" paragraph gutterBottom>
						Our AI-powered platform allows you to quickly find recipes catered
						to your liking. Whether you're looking for a quick meal or a tasty
						treat, AiGrub will help you find the perfect recipe.
					</Typography>
					<Typography variant="h4" paragraph gutterBottom>
						How it works:
					</Typography>
					<Typography variant="body1" paragraph gutterBottom>
						Simply enter the dietary preference or ingredients you like (or
						don't) and let our AI do the rest – it’ll suggest recipes that are
						tailored to your tastes.
					</Typography>
					<Typography variant="body1" paragraph>
						Save time, have fun and make the most of your cooking with AIGrub.
					</Typography>
				</Grid>
				<Grid item md={6} xs={12}>
					<RecipeForm handleMeals={handleMeals} />
				</Grid>
				{/* render meal list if it exists */}
				<Grid item xs={12}>
					<Typography component="h4" variant="h4">
						Meal ideas:
					</Typography>
					<ul style={{ marginBottom: "8px", minHeight: "75px" }}>
						{meals.map((meal, index) => (
							<li key={index}>
								<Link
									href={`/recipes/${convertMealStringToURL(meal)}`}
									color="secondary"
								>
									{meal}
								</Link>
							</li>
						))}
					</ul>
				</Grid>
			</Grid>
		</Layout>
	);
};

export default IndexPage;
