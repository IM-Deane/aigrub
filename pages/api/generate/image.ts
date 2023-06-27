import { getMealImageServer } from "@/api";

// handles creation of the meal image
export default async function handler(req, res) {
	if (req.method === "POST") {
		const result = await getMealImageServer(req.body.meal);
		res.status(201).json({ data: result });
	}
}
