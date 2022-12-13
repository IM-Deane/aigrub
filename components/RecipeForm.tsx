import { useState } from "react";

const RecipeForm = ({ handleMeals }) => {
	const [dietPreferences, setDietPreferences] = useState([]);
	const [newPreference, setNewPref] = useState("");

	const handleChange = (e) => {
		setNewPref(e.target.value);
		// // on enter key add pref to list
		// if (e.keyCode === 13) handleAddPref();
	};

	const handleAddPref = () => {
		setDietPreferences([
			...dietPreferences,
			{
				key: dietPreferences.length,
				label: newPreference,
			},
		]);

		// reset input field value
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
		setNewPref("");

		// TODO: should add loading state

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
	};

	return (
		<div style={{ width: "500px" }}>
			<div
				style={{
					minHeight: "10px",
					display: "flex",
					justifyContent: "flex-start",

					flexWrap: "wrap",
					padding: "5px",
				}}
			>
				{dietPreferences.map((pref) => (
					<p
						style={{
							marginRight: "8px",
							border: "1px solid black",
							borderRadius: "8px",
							padding: "5px 10px",
							textTransform: "capitalize",
						}}
						key={pref.key}
						onClick={() => handleDeletePref(pref)}
					>
						{pref.label}
					</p>
				))}
			</div>
			<form onSubmit={handleSubmit}>
				<fieldset>
					<label htmlFor="preferences">Enter your dietary preferences:</label>
					<br />
					<input
						type="text"
						id="preferences"
						name="preferences"
						value={newPreference}
						placeholder="eg. gluten-free"
						onChange={handleChange}
					/>
					<button type="button" onClick={handleAddPref}>
						Save Preference
					</button>
				</fieldset>
				<input type="submit" value="Submit" style={{ marginTop: "10px" }} />
			</form>
		</div>
	);
};

export default RecipeForm;
