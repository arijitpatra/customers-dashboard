import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import Count from "./Count";

describe("Unit tests for Count: ", () => {
  test("renders correctly with given props:", () => {
    const { getByText } = render(<Count filteredCount={5} totalCount={7} />);
    expect(getByText("5")).toBeInTheDocument();
    expect(getByText("/ 7 Customers")).toBeInTheDocument();
  });
});
