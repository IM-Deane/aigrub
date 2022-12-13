import * as React from "react";

import Chip from "@mui/material/Chip";
import LoadingButton from "@mui/lab/LoadingButton";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const RecipeForm = ({ handleMeals }) => {
	const [dietPreferences, setDietPreferences] = React.useState([]);
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
	const handleSubmit = (e) => {
		e.preventDefault();

		// TODO: should add loading state
		setIsLoading(true);

		// TODO: should likely cache duplicate requests (SWR?)
		fetch("/api/generate/meals", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ dietPreferences: dietPreferences }),
		})
			.then((response) => response.json())
			.then(({ result }) => handleMeals(result));

		// TODO: end loading state
		setIsLoading(false);
		setNewPref("");
	};

	return (
		<div style={{ width: "100%" }}>
			<Stack direction="row" spacing={1}>
				{dietPreferences.map((pref) => (
					<Chip
						key={pref.key}
						label={pref.label}
						color="secondary"
						variant="outlined"
						onDelete={() => handleDeletePref(pref)}
					/>
				))}
			</Stack>
			<form style={{ marginTop: "34px" }}>
				<div>
					<TextField
						label="Your dietary preferences"
						color="primary"
						size="small"
						value={newPreference}
						fullWidth
						placeholder="eg. gluten-free"
						onChange={handleChange}
						// if enter is pressed we add current value to preferences
						onKeyPress={(e) => e.key === "Enter" && handleAddPref(e)}
					/>
					{/* <Button variant="outlined" size="small" onClick={handleAddPref}>
						Save Preference
					</Button> */}
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
		</div>
	);
};

export default RecipeForm;
