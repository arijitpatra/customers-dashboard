import { CompanyData } from "../types/index.ts";

// fn returns list of customers based on the industry, also considers if it is active or inactive
export const filterByIndustry = (
  industry: string,
  activity: string,
  data: CompanyData[]
) => {
  const activityToBoolean = activity === "active" ? true : false;

  if (activity === "all" && industry === "all") {
    return data;
  }

  if (activity === "all" && industry !== "all") {
    return data.filter((item) => item.industry === industry);
  }

  if (activity !== "all" && industry === "all") {
    return data.filter((item) => item.isActive === activityToBoolean);
  }

  return data.filter(
    (item) => item.industry === industry && item.isActive === activityToBoolean
  );
};
