import { filterByIndustry } from "./filterByIndustry";

describe("Unit test for filterByIndustry util fn:", () => {
  test("filters correctly by industry also keeping in mind the activity:", () => {
    const testData = [
      {
        industry: "tech",
        isActive: true,
        about: "",
        id: "",
        company: "",
        projects: [],
      },
      {
        industry: "travel",
        isActive: true,
        about: "",
        id: "",
        company: "",
        projects: [],
      },
      {
        industry: "tech",
        isActive: true,
        about: "",
        id: "",
        company: "",
        projects: [],
      },
      {
        industry: "tech",
        isActive: false,
        about: "",
        id: "",
        company: "",
        projects: [],
      },
      {
        industry: "insurance",
        isActive: true,
        about: "",
        id: "",
        company: "",
        projects: [],
      },
    ];

    expect(filterByIndustry("tech", "active", testData)).toEqual([
      {
        industry: "tech",
        isActive: true,
        about: "",
        id: "",
        company: "",
        projects: [],
      },
      {
        industry: "tech",
        isActive: true,
        about: "",
        id: "",
        company: "",
        projects: [],
      },
    ]);
    expect(filterByIndustry("tech", "inactive", testData)).toEqual([
      {
        industry: "tech",
        isActive: false,
        about: "",
        id: "",
        company: "",
        projects: [],
      },
    ]);
    expect(filterByIndustry("tech", "inactive", testData)).not.toEqual([
      {
        industry: "tech",
        isActive: true,
        about: "",
        id: "",
        company: "",
        projects: [],
      },
      {
        industry: "tech",
        isActive: true,
        about: "",
        id: "",
        company: "",
        projects: [],
      },
    ]);
  });
});
