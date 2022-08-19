import React from "react";
import { Text } from "./index";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("Text", () => {
    it("should render text", () => {
        render(<Text>Text</Text>);
        const text = screen.getByText("Text");
        expect(text).toBeInTheDocument();
    });
});
