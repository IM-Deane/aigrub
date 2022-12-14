import * as React from "react";

import Link from "@mui/material/Link";

import { useRouter } from "next/router";

import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";

import Layout from "../../components/Layout";

import { convertURLToMealString } from "../../utils";

const RecipePage = () => {
	const [isLoading, setIsLoading] = React.useState(false);
	const [meal, setIsMeal] = React.useState("");
	const [recipe, setRecipe] = React.useState("");

	const router = useRouter();
	const { url } = router.query;

	// once param isn't undefined we can get the path
	React.useEffect(() => {
		if (url) {
			const mealStr = convertURLToMealString(url as string);
			setIsMeal(mealStr);
			generateRecipe(mealStr);
		}
	}, [url]);

	// handles form submission and response from server
	const generateRecipe = async (meal) => {
		setIsLoading(true);

		// TODO: should likely cache duplicate requests (SWR?)
		try {
			const response = await fetch("/api/generate/recipe", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ meal: meal }),
			});
			const { result } = await response.json();
			setRecipe(result);
		} catch (error) {
			console.log(error);
		} finally {
			setIsLoading(false);
		}
	};

	return (
		<Layout title={`${meal ? meal : "Meal"} | AiGrub`}>
			{isLoading ? (
				<Box
					sx={{
						mt: 5,
						width: "100%",
						display: "flex",
						justifyContent: "center",
					}}
				>
					<CircularProgress color="secondary" />
				</Box>
			) : (
				<Box sx={{ my: 3 }}>
					<Typography
						component="h1"
						variant="h4"
						style={{ textTransform: "capitalize" }}
						gutterBottom
					>
						{meal}
					</Typography>
					<Box>
						<Link href="/" color="secondary">
							Go back home
						</Link>
					</Box>
					<p style={{ whiteSpace: "pre-line" }}>{recipe}</p>
				</Box>
			)}
		</Layout>
	);
};

export default RecipePage;
