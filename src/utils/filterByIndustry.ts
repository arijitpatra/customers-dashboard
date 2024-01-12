/* eslint-disable @typescript-eslint/no-explicit-any */
export const filterByIndustry = (
  industry: string,
  activity: string,
  data: any
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
