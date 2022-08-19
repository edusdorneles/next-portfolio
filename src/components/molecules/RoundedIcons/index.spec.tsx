import React from "react";
import { RoundedIcons } from "./index";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("RoundedIcons", () => {
    it("should have three social media links", () => {
        render(<RoundedIcons />);
        const links = screen.getAllByRole("link");
        expect(links.length).toEqual(3);
    });
});
