import { useState } from "react";

// for parsing cookies on server
import ServerCookies from "cookies";

import Image from "next/image";

import { getMealImage, getRecipe } from "../../api";

import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

import Layout from "../../components/Layout";

import { MealType } from "../../interfaces";

import { convertURLToMealString } from "../../utils";

const RecipePage = ({ meal }) => {
	const theme = useTheme();
	const matchesMobile = useMediaQuery(theme.breakpoints.down("sm"));

	return (
		<Layout title={`${meal.name || "Meal"} | AiGrub`}>
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
			props: { meal: JSON.parse(serverCookie.get("meal")) },
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

	const imageURL = await getMealImage(mealStr);

	if (!imageURL) {
		res.status(404).json({ error: "Error creating image!" });
	}

	const recipe = await getRecipe(mealStr);

	if (!recipe) {
		res.status(500).json({ error: "Error creating recipe!" });
	}

	const mealData: MealType = { name: mealStr, imageURL, recipe };

	// store meal data in a cookie
	serverCookie.set("meal", JSON.stringify(mealData), {
		path: resolvedUrl,
	});

	// Pass data to the page via props
	return { props: { meal: mealData } };
};

export default RecipePage;
