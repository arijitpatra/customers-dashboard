import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Pill from "./Pill";
import { MdAddTask } from "react-icons/md";

describe("Unit tests for Pill:", () => {
  test("renders text and icon properly:", () => {
    render(
      <Pill>
        <>
          <MdAddTask />
          Add Task
        </>
      </Pill>
    );

    expect(screen.getByText(/Add Task/)).toBeInTheDocument();

    const svgElement = document.querySelector("svg");
    expect(svgElement).toBeInTheDocument();
  });
});
