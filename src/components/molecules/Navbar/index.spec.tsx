import React from "react";
import { Navbar } from "./index";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

jest.mock("components/atoms", () => ({
    NavItem: () => {
        return <a>Home</a>;
    }
}));

describe("Navbar component", () => {
    it("should render navbar with three links", () => {
        render(<Navbar />);
        const navbarLinks = screen.getAllByText("Home");
        expect(navbarLinks.length).toEqual(3);
    });
});
