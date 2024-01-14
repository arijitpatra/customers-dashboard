import { CompanyData } from "../types/index.ts";

// fn deletes the selected customer and returns the rest of the list
export const deleteCustomer = (id: string, data: CompanyData[]) => {
  return data.filter((item) => item.id !== id);
};
