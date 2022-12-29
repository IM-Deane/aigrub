import { useState } from "react";

// for parsing cookies on server
import ServerCookies from "cookies";

import openai from "../../utils/openai";

import Image from "next/image";

import Link from "@mui/material/Link";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

import Layout from "../../components/Layout";

import { MealType } from "../../interfaces";

import { convertURLToMealString } from "../../utils";
import { generateRecipePrompt } from "../../utils/prompts";

const RecipePage = ({ mealData }) => {
	const [meal] = useState(mealData);

	const theme = useTheme();
	const matchesMobile = useMediaQuery(theme.breakpoints.down("sm"));

	return (
		<Layout title={`${meal.name ? meal.name : "Meal"} | AiGrub`}>
			<Box sx={{ my: 3 }}>
				<Paper elevation={16} sx={{ p: 2 }}>
					<Image
						src={meal.imageURL}
						alt={meal.name}
						width={matchesMobile ? "256" : "512"}
						height={matchesMobile ? "256" : "512"}
						priority
					/>
					<Typography
						component="h1"
						variant="h4"
						style={{ textTransform: "capitalize" }}
						gutterBottom
					>
						{meal.name}
					</Typography>
					<Box>
						<Link href="/" color="primary">
							Go back home
						</Link>
					</Box>
					<p style={{ whiteSpace: "pre-line" }}>{meal.recipe}</p>
				</Paper>
			</Box>
		</Layout>
	);
};

export const getServerSideProps = async ({ req, res, query, resolvedUrl }) => {
	// Create a cookie instance
	const serverCookie = new ServerCookies(req, res);

	if (serverCookie.get("meal")) {
		// get meal data from cookie
		return {
			props: { mealData: JSON.parse(serverCookie.get("meal")) },
		};
	}

	// **** No meal data/cookie present so we need to generate it ****

	// get meal name from page url
	const mealStr = convertURLToMealString(query.url as string);

	if (!mealStr) {
		// return server 404
		// TODO: redirect to custom error page instead
		return { notFound: true };
	}

	// get meal image
	let imageURL = "";
	const imageResponse = await openai.createImage({
		prompt: mealStr,
		n: 1,
		size: "512x512",
	});
	imageURL = imageResponse.data.data[0].url;
	if (!imageURL) {
		res.status(404).json({ error: "Image not found" });
	}

	// get recipe
	let recipe = "";
	const recipeRes = await openai.createCompletion({
		model: "text-davinci-003",
		prompt: generateRecipePrompt(mealStr),
		temperature: 0.7,
		max_tokens: 256,
		top_p: 1,
		frequency_penalty: 0,
		presence_penalty: 0,
	});
	recipe = recipeRes.data.choices[0].text;
	if (!recipe) {
		res.status(404).json({ error: "Recipe not found!" });
	}

	const mealData: MealType = { name: mealStr, imageURL, recipe };

	// store meal data in a cookie
	serverCookie.set("meal", JSON.stringify(mealData), {
		path: resolvedUrl,
	});

	// Pass data to the page via props
	return { props: { mealData } };
};

export default RecipePage;
