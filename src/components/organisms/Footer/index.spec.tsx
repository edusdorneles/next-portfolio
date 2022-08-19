import React from "react";
import { Footer } from "./index";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("Footer", () => {
    it("should render text with current year", () => {
        render(<Footer />);
        const footerText = screen.getByText(`© ${new Date().getFullYear()} - Eduardo Dorneles`);
        expect(footerText).toBeInTheDocument();
    });
});
