import React from "react";
import { RoundedIcon } from "./index";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("RoundedIcon", () => {
    it("should render rounded icon", () => {
        render(<RoundedIcon title="rounded" href="/" icon={<>icon</>} />);
        const roundedIcon = screen.getByRole("link");
        expect(roundedIcon).toHaveClass("rounded-full");
    });
});
