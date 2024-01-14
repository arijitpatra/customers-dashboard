import { ACTIVE, ALL } from "../constants/index.ts";
import { CompanyData } from "../types/index.ts";

// fn returns list of customers based on the industry and activity
export const filterByIndustryAndActivity = (
  industry: string,
  activity: string,
  data: CompanyData[]
) => {
  const activityToBoolean = activity === ACTIVE ? true : false;

  if (activity === ALL && industry === ALL) {
    return data;
  }

  if (activity === ALL && industry !== ALL) {
    return data.filter((item) => item.industry === industry);
  }

  if (activity !== ALL && industry === ALL) {
    return data.filter((item) => item.isActive === activityToBoolean);
  }

  return data.filter(
    (item) => item.industry === industry && item.isActive === activityToBoolean
  );
};
