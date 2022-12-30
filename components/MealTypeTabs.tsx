import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import MealForm from "./MealForm";

import { getRandomListOfKeywords } from "../utils/index";
import { premadeMealTypes } from "../utils/enums";

const mealTabs = () => [
	{
		key: 0,
		label: "Main",
	},
	{
		key: 1,
		label: "Random",
	},
	{
		key: 2,
		label: "Breakfast",
	},
	{
		key: 3,
		label: "Lunch",
	},
	{
		key: 4,
		label: "Dinner",
	},
];

interface TabPanelProps {
	children?: React.ReactNode;
	index: number;
	value: number;
}

// render content depending on selected tab
function TabPanel(props: TabPanelProps) {
	const { children, value, index, ...other } = props;
	return (
		<div
			role="tabpanel"
			hidden={value !== index}
			id={`meal-type-tabpanel-${index}`}
			aria-labelledby={`meal-type-tab-${index}`}
			{...other}
		>
			{value === index && <Box sx={{ p: 3 }}>{children}</Box>}
		</div>
	);
}

export default function MealTypeTabs({
	handleMeals,
	initialRandomKeywords,
	isDisabled,
}) {
	const [currentTab, setCurrentTab] = React.useState(0);
	const [randomKeywords, setRandomKeywords] = React.useState(
		initialRandomKeywords
	);

	// handles changes to meal type tabs
	const handleTabChange = (event: React.SyntheticEvent, newTab: number) => {
		if (newTab === 0) {
			// each time user clicks random tab it generates a new list
			setRandomKeywords(getRandomListOfKeywords());
		}
		setCurrentTab(newTab);
	};

	return (
		<Box sx={{ width: "100%" }}>
			<Typography component="h3" variant="h6" gutterBottom>
				Meal categories:
			</Typography>
			<Box sx={{ borderBottom: 1, borderColor: "divider", width: "100%" }}>
				<Tabs
					value={currentTab}
					onChange={handleTabChange}
					variant="scrollable"
					scrollButtons="auto"
					allowScrollButtonsMobile
					textColor="primary"
					indicatorColor="primary"
				>
					{mealTabs().map(({ key, label }) => (
						<Tab key={label} value={key} label={label} />
					))}
				</Tabs>
			</Box>

			{/* Different panel shown based on current tab */}
			<TabPanel value={currentTab} index={0}>
				<MealForm
					handleMeals={handleMeals}
					// no keywords
					starterMeals={[]}
					isDisabled={isDisabled}
				/>
			</TabPanel>
			<TabPanel value={currentTab} index={1}>
				<MealForm
					handleMeals={handleMeals}
					// random keywords
					starterMeals={randomKeywords}
					isDisabled={isDisabled}
				/>
			</TabPanel>
			<TabPanel value={currentTab} index={2}>
				<MealForm
					handleMeals={handleMeals}
					starterMeals={premadeMealTypes.breakfast}
					isDisabled={isDisabled}
				/>
			</TabPanel>
			<TabPanel value={currentTab} index={3}>
				<MealForm
					handleMeals={handleMeals}
					starterMeals={premadeMealTypes.lunch}
					isDisabled={isDisabled}
				/>
			</TabPanel>
			<TabPanel value={currentTab} index={4}>
				<MealForm
					handleMeals={handleMeals}
					starterMeals={premadeMealTypes.dinner}
					isDisabled={isDisabled}
				/>
			</TabPanel>
		</Box>
	);
}
