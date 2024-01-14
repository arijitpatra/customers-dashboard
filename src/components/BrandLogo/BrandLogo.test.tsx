import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import BrandLogo from "./BrandLogo";

describe("Unit tests for BrandLogo: ", () => {
  test("renders the brand logo correctly:", () => {
    const { getByAltText } = render(<BrandLogo />);
    const image = getByAltText("brand-logo");

    expect(image).toHaveAttribute("src", "/logo.svg");
    expect(image).toHaveAttribute("width", "100px");
    expect(image).toHaveAttribute("height", "26px");
    expect(image).toHaveAttribute("loading", "lazy");
  });
});
