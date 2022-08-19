import React from "react";
import { PageTitle } from "./index";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("PageTitle component", () => {
    it("should render title", () => {
        render(<PageTitle title="front-end" />);
        const title = screen.getByText("front-end");
        expect(title).toBeInTheDocument;
    });
});
