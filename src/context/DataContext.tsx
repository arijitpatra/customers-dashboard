/* eslint-disable @typescript-eslint/no-explicit-any */
import { createContext, useState, useContext, ReactNode } from "react";

interface DataContextProps {
  children: ReactNode;
}

interface DataContextValue {
  contextData: any;
  updateContextData: (newData: string) => void;
}

const DataContext = createContext<DataContextValue | undefined>(undefined);

export const DataProvider: React.FC<DataContextProps> = ({ children }) => {
  const [contextData, setData] = useState([]);

  const updateContextData = (newData: any) => {
    setData(newData);
  };

  const value: DataContextValue = { contextData, updateContextData };

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};

// eslint-disable-next-line react-refresh/only-export-components
export const useContextData = (): DataContextValue => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error("useData must be used within a DataProvider");
  }
  return context;
};
