export const ALL = "all";
export const INSURANCE = "insurance";
export const TRAVEL = "travel";
export const TECH = "tech";
export const MARKETING = "marketing";
export const FINANCE = "finance";
export const ACTIVE = "active";
export const INACTIVE = "inactive";
export const YES = "yes";
export const NO = "no";

export const INDUSTRIES = [INSURANCE, TRAVEL, TECH, MARKETING, FINANCE];
export const INDUSTRIES_FILTER_OPTIONS = [ALL, ...INDUSTRIES];
export const ACTIVITY_FILTER_OPTIONS = [ALL, ACTIVE, INACTIVE];

export const CUSTOMERS_API_ENDPOINT =
  "https://parloafrontendchallenge.z6.web.core.windows.net/customers.json";
