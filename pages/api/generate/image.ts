import { getMealImageServer } from "@/api";

export default async function handler(req, res) {
	if (req.method === "POST") {
		try {
			const result = await getMealImageServer(req.body.meal);
			res.status(201).json({ data: result });
		} catch (error) {
			console.log(error.response);
			res
				.status(error.response.status)
				.json({ error: error.response.statusText });
		}
	}
}
