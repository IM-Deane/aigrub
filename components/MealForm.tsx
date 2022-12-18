import * as React from "react";

import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import LoadingButton from "@mui/lab/LoadingButton";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";

const MealForm = ({ handleMeals, starterMeals }) => {
	// starting tags that can provide users with inspiration
	const [dietPreferences, setDietPreferences] = React.useState(starterMeals);
	const [newPreference, setNewPref] = React.useState("");
	const [isLoading, setIsLoading] = React.useState(false);

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setNewPref(e.target.value);
	};

	const handleAddPref = (e) => {
		e.preventDefault();

		if (newPreference === "") return;

		setDietPreferences([
			...dietPreferences,
			{
				key: dietPreferences.length,
				label: newPreference,
			},
		]);
		setNewPref("");
	};

	// remove diet pref. from list
	const handleDeletePref = (prefToDelete) => {
		const newPrefs = dietPreferences.filter(
			(pref) => pref.key !== prefToDelete.key
		);
		setDietPreferences(newPrefs);
	};

	// handles form submission and response from server
	const handleSubmit = async (e) => {
		e.preventDefault();

		setIsLoading(true);

		// TODO: should likely cache duplicate requests (SWR?)
		try {
			const response = await fetch("/api/generate/meals", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ dietPreferences: dietPreferences }),
			});
			const { result } = await response.json();
			handleMeals(result);
		} catch (error) {
			console.log(error);
		} finally {
			setIsLoading(false);
			setNewPref("");
		}
	};

	return (
		<Box style={{ width: "100%" }}>
			<Stack direction="row" spacing={1} sx={{ minHeight: "32px" }}>
				{dietPreferences?.map((pref) => (
					<Chip
						key={pref.key}
						label={pref.label}
						color="success"
						variant="outlined"
						onDelete={() => handleDeletePref(pref)}
					/>
				))}
			</Stack>
			<form style={{ marginTop: "34px" }}>
				<div>
					<TextField
						label="Enter your dietary preferences"
						color="primary"
						size="small"
						value={newPreference}
						fullWidth
						placeholder="eg. gluten-free"
						onChange={handleChange}
						// if enter is pressed we add current value to preferences
						onKeyPress={(e) => e.key === "Enter" && handleAddPref(e)}
					/>
				</div>
				<LoadingButton
					loading={isLoading}
					variant="contained"
					fullWidth
					type="button"
					size="large"
					sx={{ mt: 2, textTransform: "uppercase", fontWeight: "bold" }}
					onClick={handleSubmit}
				>
					Generate Recipes
				</LoadingButton>
			</form>
		</Box>
	);
};

export default MealForm;
