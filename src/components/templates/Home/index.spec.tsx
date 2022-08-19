import React from "react";
import { Home } from "./index";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("Home", () => {
    it("should render image", () => {
        render(<Home />);
        const image = screen.getByRole("img");
        expect(image).toBeInTheDocument();
    });

    it("should have at least 1 texts", () => {
        render(<Home />);
        const text = screen.getAllByRole("paragraph");
        expect(text.length).toBeGreaterThanOrEqual(1);
    });

    it("should have three social media links", () => {
        render(<Home />);
        const links = screen.getAllByRole("link");
        expect(links.length).toEqual(3);
    });
});
