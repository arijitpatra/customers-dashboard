import styles from "./Home.module.scss";
import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { useContextData } from "../../context/DataContext";
import { filterByIndustryAndActivity } from "../../utils";
import Header from "../../components/Header";
import Filter from "../../components/Filter";
import {
  ACTIVE,
  ACTIVITY_FILTER_OPTIONS,
  ALL,
  CUSTOMERS_API_ENDPOINT,
  INDUSTRIES_FILTER_OPTIONS,
  NO,
  YES,
} from "../../constants";
import SubHeader from "../../components/SubHeader";
import Record from "../../components/Record";
import Loading from "../../components/Loading";
import Count from "../../components/Count";

const Home = () => {
  const { contextData, updateContextData } = useContextData();
  const [localData, setLocalData] = useState(contextData);
  const [activity, setActivity] = useState(ACTIVE);
  const [industry, setIndustry] = useState(ALL);

  const { isPending, error, data } = useQuery({
    queryKey: ["customers"],
    queryFn: () => fetch(CUSTOMERS_API_ENDPOINT).then((res) => res.json()),
    refetchOnWindowFocus: false,
    enabled: contextData.length === 0,
  });

  // setting the API response in the context which will act like master data
  useEffect(() => {
    if (
      data &&
      data.length > 0 &&
      sessionStorage.getItem("isInitDone") === NO
    ) {
      updateContextData(data);
      sessionStorage.setItem("isInitDone", YES);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  // show all active customers by default
  useEffect(() => {
    setLocalData(contextData.filter((item) => item.isActive === true));
  }, [contextData]);

  // for showing data based on the filters
  useEffect(() => {
    setLocalData(filterByIndustryAndActivity(industry, activity, contextData));
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

      {error ? `An error has occurred: ${error.message}` : null}

      {localData?.map((customer) => {
        return <Record key={customer.id} data={customer} />;
      })}
    </>
  );
};

export default Home;
