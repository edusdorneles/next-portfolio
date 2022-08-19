import React from "react";
import { Header } from "./index";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

jest.mock("next/router", () => ({
    useRouter() {
        return { pathname: "/" };
    }
}));

describe("Header", () => {
    it("should render logo", () => {
        render(<Header />);
        const headerLogo = screen.getByAltText("Logo - Eduardo Dorneles");
        expect(headerLogo).toBeInTheDocument();
    });

    it("should render navbar", () => {
        render(<Header />);

        const navbarHome = screen.getByRole("link", { name: "Home" });
        const navbarProjetos = screen.getByRole("link", { name: "Projetos" });
        const navbarContato = screen.getByRole("link", { name: "Contato" });

        expect(navbarHome).toBeInTheDocument();
        expect(navbarProjetos).toBeInTheDocument();
        expect(navbarContato).toBeInTheDocument();
    });
});
