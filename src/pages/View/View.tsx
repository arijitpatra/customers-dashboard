import styles from "./View.module.scss";
import Header from "../../components/Header";
import { useContextData } from "../../context/DataContext";
import { Link, useParams } from "react-router-dom";
import Pill from "../../components/Pill";
import { MdArrowBack } from "react-icons/md";
import { dateTimeFormatter } from "../../utils";
import NoDataError from "../../components/NoDataError";
import Loading from "../../components/Loading";

const View = () => {
  const { contextData } = useContextData();
  const { customerId } = useParams();
  const customerData = contextData.filter((item) => item.id === customerId)[0];

  if (customerData && Object.keys(customerData).length === 0) {
    return (
      <>
        <Header />
        <Loading />
      </>
    );
  }

  if (contextData.length === 0) {
    return <NoDataError />;
  }

  return (
    <div className={`${styles.view}`}>
      <Header />
      <h1>
        <Link to="/">
          <MdArrowBack className="react-icons" />
        </Link>
        {customerData.company}
      </h1>
      <table>
        <tbody>
          <tr>
            <td>
              <label>ID</label>
            </td>
            <td>{customerData.id}</td>
          </tr>
          <tr>
            <td>
              <label>About</label>
            </td>
            <td>{customerData.about}</td>
          </tr>
          <tr>
            <td>
              <label>Industry</label>
            </td>
            <td>
              <Pill>{customerData.industry}</Pill>
            </td>
          </tr>
          <tr>
            <td>
              <label>Is active</label>
            </td>
            <td>{customerData.isActive ? "Yes" : "No"}</td>
          </tr>
        </tbody>
      </table>

      <div className={`${styles.projects}`}>
        <div className={`${styles.title}`}>Projects</div>
        <div>
          {customerData.projects.length === 0 ? (
            "No projects!"
          ) : (
            <table>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Contact</th>
                  <th>Start Date</th>
                  <th>End Date</th>
                </tr>
              </thead>
              <tbody>
                {customerData.projects.map((project) => (
                  <tr key={project.id}>
                    <td>{project.id || "---"}</td>
                    <td>{project.name || "---"}</td>
                    <td>{project.contact || "---"}</td>
                    <td>{dateTimeFormatter(project.start_date) || "---"}</td>
                    <td>{dateTimeFormatter(project.end_date) || "---"}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
};

export default View;
