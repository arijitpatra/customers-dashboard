// import "@testing-library/jest-dom";
// import { render, fireEvent } from "@testing-library/react";
// import Filter from "./Filter";

// // Mock the generateOptions function
// jest.mock("../../utils", () => ({
//   generateOptions: jest.fn((options: string[]) =>
//     options.map((option) => (
//       <option key={option} value={option}>
//         {option}
//       </option>
//     ))
//   ),
// }));

// describe("Filter Component", () => {
//   it("renders correctly with given props", () => {
//     const label = "Industry";
//     const options = ["Option 1", "Option 2", "Option 3"];
//     const value = "Option 2";
//     const onFilterChange = jest.fn();

//     const { getByText, getByLabelText } = render(
//       <Filter
//         label={label}
//         options={options}
//         value={value}
//         onFilterChange={onFilterChange}
//       />
//     );

//     // Check if the component renders the label, icon, and selected option
//     expect(getByText("Industry:")).toBeInTheDocument();
//     expect(getByLabelText("Industry:")).toHaveValue("Option 2");
//     expect(getByText("Option 1")).toBeInTheDocument();
//     expect(getByText("Option 2")).toBeInTheDocument();
//     expect(getByText("Option 3")).toBeInTheDocument();
//   });

//   it("triggers onFilterChange when the select value changes", () => {
//     const label = "Industry";
//     const options = ["Option 1", "Option 2", "Option 3"];
//     const value = "Option 2";
//     const onFilterChange = jest.fn();

//     const { getByLabelText } = render(
//       <Filter
//         label={label}
//         options={options}
//         value={value}
//         onFilterChange={onFilterChange}
//       />
//     );

//     // Simulate a change event on the select element
//     fireEvent.change(getByLabelText("Industry:"));

//     // Check if the onFilterChange function is called
//     expect(onFilterChange).toHaveBeenCalledTimes(1);
//   });

//   // Add more test cases as needed
// });
