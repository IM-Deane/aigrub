import { render, screen } from "@testing-library/react";
import Home from "../../pages/index";
import "@testing-library/jest-dom";
import { getRandomListOfKeywords } from "../../utils";

describe("Home", () => {
	const defaultProps = {
		initialRandomKeywords: getRandomListOfKeywords(),
	};

	it("page renders correctly", () => {
		render(<Home {...defaultProps} />);

		const heading = screen.getByRole("heading", {
			name: /aigrub/i,
		});

		expect(heading).toBeInTheDocument();
	});
});
