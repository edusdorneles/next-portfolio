import React from "react";
import { NavItem } from "./index";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

jest.mock("next/router", () => ({
    useRouter() {
        return { pathname: "/" };
    }
}));

describe("NavItem component", () => {
    it("should render text", () => {
        render(<NavItem text="text" href="/" icon={<>icon</>} />);
        const itemText = screen.getByText("text");
        expect(itemText).toBeInTheDocument();
    });

    it("should render icon", () => {
        render(<NavItem text="text" href="/" icon={<>icon</>} />);
        const itemIcon = screen.getByText("icon");
        expect(itemIcon).toBeInTheDocument();
    });

    it("should render active nav item", () => {
        render(<NavItem text="text" href="/" icon={<>icon</>} />);
        const itemLink = screen.getByRole("link");
        expect(itemLink).toHaveClass("bg-secondary");
    });
});
