import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Record from "./Record";
import { DataProvider } from "../../context/DataContext";

const mockData = {
  id: "123",
  isActive: true,
  company: "Test Company",
  industry: "Test Industry",
  projects: [],
  about: "Test about",
};

beforeEach(() => {
  render(
    <MemoryRouter>
      <DataProvider>
        <Record data={mockData} />
      </DataProvider>
    </MemoryRouter>
  );
});

describe("Record Component", () => {
  test("renders correctly with given data", () => {
    // Check if the company name is rendered
    expect(screen.getByText("Test Company")).toBeInTheDocument();

    // Check if the industry pill is rendered
    expect(screen.getByText("Test Industry")).toBeInTheDocument();

    // Check if the edit link is present
    expect(screen.getByLabelText("edit")).toBeInTheDocument();
  });

  test('toggles details visibility when "more" button is clicked', () => {
    // Check if details are initially hidden
    expect(screen.queryByText("ID")).not.toBeInTheDocument();

    // Click the "more" button
    fireEvent.click(screen.getByText("more"));

    // Check if details become visible
    expect(screen.getByText("ID")).toBeInTheDocument();
  });

  // Add more test cases as needed
});
