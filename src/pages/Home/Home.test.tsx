import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Home from "./Home";
import { DataProvider } from "../../context/DataContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { MemoryRouter } from "react-router-dom";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
});

beforeEach(() => {
  render(
    <MemoryRouter>
      <DataProvider>
        <QueryClientProvider client={queryClient}>
          <Home />
        </QueryClientProvider>
      </DataProvider>
    </MemoryRouter>
  );
});

describe("Unit tests for Home:", () => {
  test("renders sub header title correctly:", () => {
    expect(screen.getByText("Customers Dashboard")).toBeInTheDocument();
    expect(screen.queryByText("Customer Dashboard")).toBeFalsy();
  });
});
