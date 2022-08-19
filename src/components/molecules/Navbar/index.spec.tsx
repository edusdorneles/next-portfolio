import React from "react";
import { Navbar } from "./index";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

jest.mock("components/atoms", () => ({
    NavItem: () => {
        return <a href="/">Home</a>;
    }
}));

describe("Navbar", () => {
    it("should render with three links", () => {
        render(<Navbar />);
        const navbarLinks = screen.getAllByRole("link", { name: "Home" });
        expect(navbarLinks.length).toBe(3);
    });
});
