import { useContext } from "react";
import { DataContext } from "../context/DataContext";

export const useContextData = () => {
  return useContext(DataContext);
};
