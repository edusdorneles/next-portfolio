import React from "react";
import { Layout } from "./index";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

jest.mock("next/router", () => ({
    useRouter() {
        return { pathname: "/" };
    }
}));

describe("Layout", () => {
    it("should render header", () => {
        render(<Layout>Header</Layout>);
        const header = screen.getByRole("banner");
        expect(header).toBeInTheDocument();
    });

    it("should render footer", () => {
        render(<Layout>Footer</Layout>);
        const footer = screen.getByRole("contentinfo");
        expect(footer).toBeInTheDocument();
    });
});
