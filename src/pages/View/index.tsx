// import Header from "../../components/Header";

// const View = () => (
//   <>
//     <Header />
//     <div>Details</div>
//   </>
// );

// export default View;

import "./index.scss";
import Header from "../../components/Header";
import { useContextData } from "../../context/DataContext";
import { Link, useNavigate, useParams } from "react-router-dom";
import Pill from "../../components/Pill";
import { MdArrowBack } from "react-icons/md";
import { dateTimeFormatter } from "../../utils";

const View = () => {
  const { contextData } = useContextData();
  const navigate = useNavigate();
  let { customerId } = useParams();
  const customerData = contextData.filter((item) => item.id === customerId)[0];
  console.log(customerData);

  if (customerData?.length === 0) {
    return "Loading...";
  }

  return (
    <div className="view">
      <Header />
      <h1>
        <Link to="/">
          <MdArrowBack className="react-icons" />
        </Link>
        {customerData.company}
      </h1>
      <table>
        <tr>
          <td>
            <label htmlFor="id">ID</label>
          </td>
          <td>{customerData.id}</td>
        </tr>
        <tr>
          <td>
            <label htmlFor="about">About</label>
          </td>
          <td>{customerData.about}</td>
        </tr>
        <tr>
          <td>
            <label htmlFor="industry">Industry</label>
          </td>
          <td>
            <Pill>{customerData.industry}</Pill>
          </td>
        </tr>
        <tr>
          <td>
            <label htmlFor="isActive">Is active</label>
          </td>
          <td>{customerData.isActive ? "Yes" : "No"}</td>
        </tr>
      </table>

      <div className="projects">
        <div className="title">Projects</div>
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
