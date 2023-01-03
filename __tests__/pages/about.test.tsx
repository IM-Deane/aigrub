import { render, screen } from "@testing-library/react";
import About from "../../pages/about";
import "@testing-library/jest-dom";

describe("About", () => {
	it("page renders correctly", () => {
		render(<About />);

		const heading = screen.getByRole("heading", {
			name: /about the app/i,
		});

		expect(heading).toBeInTheDocument();
	});
});
