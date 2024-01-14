import { filterByIndustryAndActivity } from "./filterByIndustryAndActivity";

describe("Unit test for filterByIndustryAndActivity util fn:", () => {
  test("filters correctly by industry and activity:", () => {
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

    expect(filterByIndustryAndActivity("tech", "active", testData)).toEqual([
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
    expect(filterByIndustryAndActivity("tech", "inactive", testData)).toEqual([
      {
        industry: "tech",
        isActive: false,
        about: "",
        id: "",
        company: "",
        projects: [],
      },
    ]);
    expect(
      filterByIndustryAndActivity("tech", "inactive", testData)
    ).not.toEqual([
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
