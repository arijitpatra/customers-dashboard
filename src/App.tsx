import { Suspense, useEffect, useState, lazy } from "react";
import "./App.scss";
import { useQuery } from "@tanstack/react-query";
import { useContextData } from "./context/DataContext";
import { filterByIndustry } from "./utils";
import Header from "./components/Header";
import Filter from "./components/Filter";
import {
  ACTIVITY_FILTER_OPTIONS,
  CUSTOMERS_API_ENDPOINT,
  INDUSTRIES_FILTER_OPTIONS,
} from "./constants";
import SubHeader from "./components/SubHeader";
import Record from "./components/Record";

const Count = lazy(() => import("./components/Count"));

const App = () => {
  const { contextData, updateContextData } = useContextData();
  const [localData, setLocalData] = useState(contextData);
  const [activity, setActivity] = useState("active");
  const [industry, setIndustry] = useState("all");

  const { isPending, error, data } = useQuery({
    queryKey: ["customers"],
    queryFn: () => fetch(CUSTOMERS_API_ENDPOINT).then((res) => res.json()),
    refetchOnWindowFocus: false,
    enabled: contextData.length === 0,
  });

  useEffect(() => {
    if (
      data &&
      data.length > 0 &&
      sessionStorage.getItem("isInitDone") === "no"
    ) {
      updateContextData(data);
      sessionStorage.setItem("isInitDone", "yes");
    }
  }, [data]);

  useEffect(() => {
    setLocalData(contextData.filter((item) => item.isActive === true));
  }, [contextData]);

  useEffect(() => {
    if (activity === "all") setLocalData(contextData);
    if (activity === "active")
      setLocalData(contextData.filter((item) => item.isActive === true));
    if (activity === "inactive")
      setLocalData(contextData.filter((item) => item.isActive === false));
  }, [activity, contextData]);

  useEffect(() => {
    setLocalData(filterByIndustry(industry, activity, contextData));
  }, [industry, activity, contextData]);

  if (error) return "An error has occurred: " + error.message;

  return (
    <>
      <Header />
      <SubHeader />
      <div className="filter-row">
        <Filter
          label="Activity"
          options={ACTIVITY_FILTER_OPTIONS}
          value={activity}
          onFilterChange={(e) => setActivity(e.target.value)}
        />
        <Filter
          label="Industry"
          options={INDUSTRIES_FILTER_OPTIONS}
          value={industry}
          onFilterChange={(e) => setIndustry(e.target.value)}
        />
        <Suspense fallback="Counting...">
          {contextData.length > 0 && localData.length > 0 && (
            <Count
              filteredCount={localData.length}
              totalCount={contextData.length}
            />
          )}
        </Suspense>
      </div>
      {isPending ? "Loading..." : null}
      {localData.length === 0 && !isPending
        ? "No data matches the filters..."
        : null}
      {error ? `An error has occurred: ${error.message}` : null}
      {localData?.map((customer) => {
        return <Record key={customer.id} data={customer} />;
      })}
    </>
  );
};

export default App;
