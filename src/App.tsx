import { useEffect, useState } from "react";
import "./App.scss";
import {
  MdOutlineDiversity1,
  MdFilterAlt,
  MdEdit,
  MdDelete,
  MdArrowDropUp,
  MdArrowDropDown,
  MdArrowOutward,
  MdBusinessCenter,
} from "react-icons/md";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { useContextData } from "./context/DataContext";
import { deleteUser, filterByIndustry } from "./utils";
import Pill from "./components/Pill";
import Header from "./components/Header";

const renderOption = (value: string) => <option value={value}>{value}</option>;

// TODO: filter out all inactive, make the select dynamic based on the available industries, also A11Y
function App() {
  const [showDetails, setShowDetails] = useState("");
  const { contextData, updateContextData } = useContextData();
  const [localData, setLocalData] = useState(contextData);
  const [activity, setActivity] = useState("active");
  const [industry, setIndustry] = useState("all");

  console.log(contextData);

  const { isPending, error, data } = useQuery({
    queryKey: ["customers"],
    queryFn: () =>
      fetch(
        "https://parloafrontendchallenge.z6.web.core.windows.net/customers.json"
      ).then((res) => res.json()),
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
      <div className="sub-header">
        <h1>
          <MdOutlineDiversity1 className="react-icons" />
          Customers Dashboard
        </h1>
        <div>
          <Link to="create">
            <button>Create new customer</button>
          </Link>
        </div>
      </div>
      <div className="filterDiv">
        <div>
          <MdFilterAlt className="react-icons" /> Activity:{" "}
          {/* // TODO: make a const and iterate dynamically */}
          <select
            onChange={(e) => setActivity(e.target.value)}
            value={activity}
          >
            {renderOption("all")}
            {renderOption("active")}
            {renderOption("inactive")}
          </select>
        </div>
        <div>
          <MdFilterAlt className="react-icons" /> Industry:{" "}
          {/* // TODO: make a const and iterate dynamically */}
          <select
            onChange={(e) => setIndustry(e.target.value)}
            value={industry}
          >
            {renderOption("all")}
            {renderOption("insurance")}
            {renderOption("travel")}
            {renderOption("tech")}
            {renderOption("marketing")}
            {renderOption("finance")}
          </select>
        </div>
        <div>
          <span className="active-count">{localData.length}</span> /{" "}
          {contextData.length} Customers
        </div>
      </div>
      {isPending ? "Loading..." : null}
      {localData.length === 0 && !isPending ? "No data" : null}
      {error ? `An error has occurred: ${error.message}` : null}
      {localData?.map((customer) => {
        return (
          <Link to={`view/${customer.id}`} key={customer.id}>
            <section
              key={customer.id}
              className={`record ${customer.isActive ? "active" : "inactive"}`}
            >
              <div className="record--layout">
                <div>
                  <div>
                    <MdBusinessCenter className="react-icons fs-xl" />
                  </div>
                  <div className="company">
                    {customer.company}
                    <MdArrowOutward className="react-icons" />
                  </div>
                  <div>
                    <Pill>{customer.industry}</Pill>
                  </div>
                  <div
                    role="button"
                    onClick={(e) => {
                      setShowDetails(showDetails === "" ? customer.id : "");
                      e.preventDefault();
                    }}
                  >
                    {showDetails === customer.id ? "less" : "more"}
                    {showDetails === customer.id ? (
                      <MdArrowDropUp className="react-icons" />
                    ) : (
                      <MdArrowDropDown className="react-icons" />
                    )}
                  </div>
                </div>
                <div>
                  <Link to={`edit/${customer.id}`}>
                    <MdEdit
                      className="react-icons icon-button fs-l"
                      title="edit"
                      aria-label="edit"
                    />
                  </Link>
                  {customer.isActive === false ? (
                    <MdDelete
                      style={{ marginLeft: "15px" }}
                      className="react-icons icon-button delete fs-l"
                      title="delete"
                      aria-label="delete"
                      onClick={(e) => {
                        e.preventDefault();
                        if (
                          confirm(
                            `Are you sure you want to delete ${customer.company}?`
                          ) == true
                        ) {
                          updateContextData(
                            deleteUser(customer.id, contextData)
                          );
                        } else {
                          console.log("You canceled!");
                        }
                      }}
                    />
                  ) : null}
                </div>
              </div>
              {showDetails === customer.id ? (
                <div className="details-row">
                  <div>
                    <small>ID</small>
                    <div>{customer.id}</div>
                  </div>
                  <div>
                    <small>ABOUT</small>
                    <div>{customer.about}</div>
                  </div>
                  <div>
                    <small>PROJECT(S)</small>
                    <div>{customer?.projects?.length ?? 0}</div>
                  </div>
                </div>
              ) : null}
            </section>
          </Link>
        );
      })}
    </>
  );
}

export default App;
