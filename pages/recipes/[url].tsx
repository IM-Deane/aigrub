import Layout from "../../components/Layout";
import { generateRecipePrompt } from "../../utils/prompts";

import { Configuration, OpenAIApi } from "openai";
import { convertURLToMealString } from "../../utils";

const configuration = new Configuration({
	apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export async function getServerSideProps({ params }) {
	const mealStr = convertURLToMealString(params.url);

	// FIXME: cache this request as it is being called on every page load
	const completion = await openai.createCompletion({
		model: "text-davinci-003",
		prompt: generateRecipePrompt(mealStr),
		temperature: 0.7,
		max_tokens: 256,
		top_p: 1,
		frequency_penalty: 0,
		presence_penalty: 0,
	});

	// request failed
	if (!completion) {
		return {
			notFound: true,
		};
	}

	return {
		props: {
			meal: mealStr,
			recipe: completion.data.choices[0].text,
		}, // will be passed to the page component as props
	};
}

type Props = {
	meal: string;
	recipe: string;
};

const RecipePage = ({ meal, recipe }: Props) => {
	return (
		<Layout title={`${meal ? meal : "Meal"} | What Should I Eat Tonight?`}>
			<div>
				<h1 style={{ textTransform: "capitalize" }}>Meal: {meal}</h1>

				<h2>Recipe:</h2>
				<div style={{ whiteSpace: "pre-line" }}>{recipe}</div>
			</div>
		</Layout>
	);
};

export default RecipePage;
