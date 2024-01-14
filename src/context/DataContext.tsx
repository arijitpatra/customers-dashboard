import { createContext, useState, useContext, ReactNode } from "react";
import { CompanyData } from "../types/index.ts";

interface DataContextProps {
  children: ReactNode;
}

interface DataContextValue {
  contextData: CompanyData[];
  updateContextData: (newData: CompanyData[]) => void;
}

const DataContext = createContext<DataContextValue | undefined>(undefined);

export const DataProvider = ({ children }: DataContextProps) => {
  const [contextData, setData] = useState<CompanyData[]>([]);

  const updateContextData = (newData: CompanyData[]) => {
    setData(newData);
  };

  const value: DataContextValue = { contextData, updateContextData };

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};

// eslint-disable-next-line react-refresh/only-export-components
export const useContextData = () => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error("useContextData must be used within a DataProvider");
  }
  return context;
};
