import openai from "../../../utils/openai";

// handles creation of the meal image
export default async function handler(req, res) {
	if (req.method === "POST") {
		const response = await openai.createImage({
			prompt: req.body.meal,
			n: 1,
			size: "512x512",
		});
		res.status(201).json({ result: response.data.data[0].url });
	}
}
