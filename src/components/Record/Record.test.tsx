import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Record from "./Record";
import { DataProvider } from "../../context/DataContext";

const mockData = {
  id: "123",
  isActive: false,
  company: "Test",
  industry: "tech",
  projects: [],
  about: "my fake bio",
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

describe("Unit tests for Record:", () => {
  test("renders correctly with given data:", () => {
    expect(screen.getByText("Test")).toBeInTheDocument();
    expect(screen.getByText("tech")).toBeInTheDocument();
    expect(screen.getByText("more")).toBeInTheDocument();
    expect(screen.getByLabelText("edit")).toBeInTheDocument();
    expect(screen.getByLabelText("delete")).toBeInTheDocument();
  });

  test("toggles properly on more/less click:", () => {
    expect(screen.queryByText("ID")).not.toBeInTheDocument();

    fireEvent.click(screen.getByText("more"));
    expect(screen.getByText("ID")).toBeInTheDocument();

    fireEvent.click(screen.getByText("less"));
    expect(screen.queryByText("ID")).toBeFalsy();
  });
});
