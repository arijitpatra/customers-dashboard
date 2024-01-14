import { deleteCustomer } from "./deleteCustomer";

describe("Unit test for deleteCustomer util fn:", () => {
  test("correct output is returned after deletion:", () => {
    const testData = [
      {
        industry: "tech",
        isActive: true,
        about: "",
        id: "1",
        company: "",
        projects: [],
      },
      {
        industry: "tech",
        isActive: true,
        about: "",
        id: "2",
        company: "",
        projects: [],
      },
      {
        industry: "tech",
        isActive: true,
        about: "",
        id: "3",
        company: "",
        projects: [],
      },
    ];

    expect(deleteCustomer("1", testData)).toEqual([
      {
        industry: "tech",
        isActive: true,
        about: "",
        id: "2",
        company: "",
        projects: [],
      },
      {
        industry: "tech",
        isActive: true,
        about: "",
        id: "3",
        company: "",
        projects: [],
      },
    ]);
    expect(deleteCustomer("3", testData)).toEqual([
      {
        industry: "tech",
        isActive: true,
        about: "",
        id: "1",
        company: "",
        projects: [],
      },
      {
        industry: "tech",
        isActive: true,
        about: "",
        id: "2",
        company: "",
        projects: [],
      },
    ]);
    expect(deleteCustomer("2", testData)).not.toEqual([
      {
        industry: "tech",
        isActive: true,
        about: "",
        id: "2",
        company: "",
        projects: [],
      },
      {
        industry: "tech",
        isActive: true,
        about: "",
        id: "3",
        company: "",
        projects: [],
      },
    ]);
  });
});
