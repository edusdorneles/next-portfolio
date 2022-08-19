import React from "react";
import { NavLogo } from "./index";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("NavLogo component", () => {
    it("should render image", () => {
        render(<NavLogo />);
        const image = screen.getByAltText("Logo - Eduardo Dorneles");
        expect(image).toBeInTheDocument();
    });
});
