import { useState } from "react";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

import Layout from "../components/Layout";
import MealTypeTabs from "../components/MealTypeTabs";
import Robby from "../components/Robby";

import {
	cleanMealData,
	convertMealStringToURL,
	getRandomListOfKeywords,
} from "../utils";

export async function getStaticProps() {
	return {
		props: {
			// Note: had to get keywords here before page load due to react hydration BS.
			// Even useEffect with dependencies array wasn't working :(
			initialRandomKeywords: getRandomListOfKeywords(),
		},
	};
}

const IndexPage = ({ initialRandomKeywords }) => {
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
					<Paper elevation={16} sx={{ p: 2 }}>
						<Typography
							component="h1"
							variant="h3"
							sx={{ display: "flex", alignItems: "center" }}
						>
							AiGrub
						</Typography>
						<Typography
							component="small"
							variant="subtitle1"
							sx={{ fontStyle: "italic" }}
						>
							Making Meal Time Fun, Fast and Flavorful with AI!
						</Typography>
					</Paper>
				</Grid>
				<Grid item md={6} xs={12}>
					<Paper elevation={16} sx={{ p: 2 }}>
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
							Don't feel like typing? Then the premade food categories might be
							right up your alley.
						</Typography>
					</Paper>
				</Grid>
				<Grid item md={6} xs={12}>
					<Paper elevation={16} sx={{ p: 2 }}>
						<MealTypeTabs
							initialRandomKeywords={initialRandomKeywords}
							handleMeals={handleMeals}
						/>
					</Paper>
				</Grid>
				{/* render meal list if it exists */}
				<Grid item xs={12}>
					<Paper elevation={16} sx={{ p: 2 }}>
						<Typography component="h4" variant="h4">
							Meal ideas:
						</Typography>
						{meals.length > 0 ? (
							<ul style={{ marginBottom: "8px", minHeight: "75px" }}>
								{meals.map((meal, index) => (
									<li key={index}>
										<Link
											href={`/recipes/${convertMealStringToURL(meal)}`}
											color="primary"
										>
											{meal}
										</Link>
									</li>
								))}
							</ul>
						) : (
							<Box sx={{ p: 3 }}>
								<Robby
									title="Nothing to see here...You tryna eat or nah fleshbag?"
									placement="top-end"
									fontSize="large"
								/>
							</Box>
						)}
					</Paper>
				</Grid>
			</Grid>
		</Layout>
	);
};

export default IndexPage;
