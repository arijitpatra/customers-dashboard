import styles from "./Home.module.scss";
import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { useContextData } from "../../context/DataContext";
import { filterByIndustry } from "../../utils";
import Header from "../../components/Header";
import Filter from "../../components/Filter";
import {
  ACTIVITY_FILTER_OPTIONS,
  CUSTOMERS_API_ENDPOINT,
  INDUSTRIES_FILTER_OPTIONS,
} from "../../constants";
import SubHeader from "../../components/SubHeader";
import Record from "../../components/Record";
import Loading from "../../components/Loading";
import Count from "../../components/Count";

const Home = () => {
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
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

  return (
    <>
      <Header />
      <SubHeader />
      <div className={`${styles.filterRow}`}>
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
        <Count
          filteredCount={localData.length}
          totalCount={contextData.length}
        />
      </div>

      {isPending ? <Loading /> : null}

      {localData.length === 0 &&
      !isPending &&
      localStorage.getItem("isInitDone") === "yes"
        ? "No data matches the filters..."
        : null}

      {error ? `An error has occurred: ${error.message}` : null}

      {localData?.map((customer) => {
        return <Record key={customer.id} data={customer} />;
      })}
    </>
  );
};

export default Home;
