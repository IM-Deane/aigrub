import { useState, useEffect } from "react";

// for parsing cookies on server
import ServerCookies from "cookies";
import ClientCookies from "js-cookie";

import Image from "next/image";

import { getMealImageClient, getRecipe } from "../../api";

import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

import Layout from "../../components/Layout";

import { convertURLToMealString } from "../../utils";

const RecipePage = ({ meal, resolvedUrl }) => {
	const [imageURL, setImageURL] = useState("");
	const [isLoading, setIsLoading] = useState(false);

	const theme = useTheme();
	const matchesMobile = useMediaQuery(theme.breakpoints.down("sm"));

	// get meal image
	useEffect(() => {
		if (ClientCookies.get("imageURL")) {
			// get image url from cache
			setImageURL(ClientCookies.get("imageURL"));
		} else {
			// fetch and cache meal image
			setIsLoading(true);
			getMealImageClient(meal.name)
				.then(({ data }) => {
					setImageURL(data);
					ClientCookies.set("imageURL", data, { path: resolvedUrl });
				})
				.catch((err) => console.log(err))
				.finally(() => setIsLoading(false));
		}
	}, [meal.name, resolvedUrl]);

	return (
		<Layout title={`${meal.name || "Meal"} | AiGrub`}>
			<Box sx={{ my: 3 }}>
				<Paper elevation={16} sx={{ p: 2 }}>
					{isLoading ? (
						<CircularProgress color="primary" />
					) : (
						<Image
							src={imageURL}
							alt={meal.name}
							width={matchesMobile ? "256" : "512"}
							height={matchesMobile ? "256" : "512"}
							priority
						/>
					)}
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
			props: { meal: JSON.parse(serverCookie.get("meal")), resolvedUrl },
		};
	}

	// **** No meal data/cookie present so we need to generate it ****

	// get meal name from page url
	const mealStr = convertURLToMealString(query.url as string);

	if (!mealStr) {
		return { notFound: true };
	}

	const recipe = await getRecipe(mealStr);

	if (!recipe) {
		res.status(500).send({ error: "Error creating recipe!" });
	}

	const mealData = { name: mealStr, recipe };

	// store meal data in a cookie
	serverCookie.set("meal", JSON.stringify(mealData), {
		path: resolvedUrl,
	});

	// Pass data to the page via props
	return { props: { meal: mealData, resolvedUrl } };
};

export default RecipePage;
