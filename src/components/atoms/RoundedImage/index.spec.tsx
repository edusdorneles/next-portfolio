import React from "react";
import { RoundedImage } from "./index";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("RoundedImage", () => {
    it("should render rounded image", () => {
        render(<RoundedImage src="/src.jpg" alt="alt" width={200} height={200} />);
        const roundedImage = screen.getByRole("img");
        expect(roundedImage).toHaveClass("rounded-full");
    });
});
