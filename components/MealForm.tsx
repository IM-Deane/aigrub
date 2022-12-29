import * as React from "react";

import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import LoadingButton from "@mui/lab/LoadingButton";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";

const defaultErrorState = {
	blankInput: "",
	minLength: "",
};

const MealForm = ({ handleMeals, starterMeals, isDisabled = false }) => {
	// starting tags that can provide users with inspiration
	const [dietPreferences, setDietPreferences] = React.useState(starterMeals);
	const [newPreference, setNewPref] = React.useState("");
	const [isLoading, setIsLoading] = React.useState(false);
	const [errors, setErrors] = React.useState({
		blankInput: "",
		minLength: "",
	});

	const isDisabledInput = () => {
		if (isDisabled) {
			return true;
		} else if (dietPreferences.length === 0) {
			return true;
		} else if (!newPreference) {
			return false;
		} else {
			return false;
		}
	};

	// handles changes to text field input
	// also resets error fields if present
	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { value } = e.target;
		const charLength = value.length;

		if (charLength > 0 && errors.blankInput) {
			// reset blank input error
			setErrors({ ...errors, blankInput: "" });
		} else if (charLength >= 3) {
			// can just reset error state
			setErrors(defaultErrorState);
		}

		setNewPref(e.target.value);
	};

	// adds valid preferences to the list
	const handleAddPref = (e) => {
		e.preventDefault();

		// VALIDATION: don't add if blank or too short
		if (!newPreference) {
			setErrors({
				...errors,
				blankInput: "Option cannot be empty.",
			});
			return;
		} else if (newPreference.length < 3) {
			setErrors({
				...errors,
				minLength: "Option must be at least 3 characters long",
			});
			return;
		}

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
			<Stack
				direction={{ xs: "column", sm: "row" }}
				spacing={{ xs: 2, sm: 1 }}
				sx={{ minHeight: "32px" }}
			>
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
						// TODO: should I add an actual button as well?
						// https://mui.com/material-ui/react-text-field/#input-adornments
						// if enter is pressed we add current value to preferences
						onKeyPress={(e) => e.key === "Enter" && handleAddPref(e)}
						inputProps={{ maxLength: 20 }}
						error={Boolean(errors.blankInput) || Boolean(errors.minLength)}
						helperText={errors.blankInput || errors.minLength || ""}
					/>
				</div>
				<LoadingButton
					disabled={isDisabledInput()}
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
