import styles from "./Edit.module.scss";
import { Formik, Field, Form } from "formik";
import Header from "../../components/Header";
import { INDUSTRIES } from "../../constants";
import { useContextData } from "../../context/DataContext";
import { Link, useNavigate, useParams } from "react-router-dom";
import { MdArrowBack } from "react-icons/md";
import { generateOptions } from "../../utils";
import NoDataError from "../../components/NoDataError";
import Loading from "../../components/Loading";

const Edit = () => {
  const { contextData, updateContextData } = useContextData();
  const navigate = useNavigate();
  const { customerId } = useParams();
  const customerData = contextData.filter((item) => item.id === customerId)[0];

  if (Object.keys(customerData).length === 0) {
    return <Loading />;
  }

  if (contextData.length === 0) {
    return <NoDataError />;
  }

  return (
    <div className={`${styles.edit}`}>
      <Header />
      <h1>
        <Link to="/">
          <MdArrowBack className="react-icons" />
        </Link>
        Edit
      </h1>
      <Formik
        initialValues={{
          company: customerData.company,
          about: customerData.about,
          industry: customerData.industry,
          isActive: customerData.isActive ? "yes" : "no",
        }}
        onSubmit={(values) => {
          const updated = contextData.map((item) => {
            return item.id === customerId
              ? {
                  ...item,
                  company: values.company,
                  about: values.about,
                  industry: values.industry,
                  isActive: values.isActive === "yes" ? true : false,
                }
              : item;
          });
          updateContextData(updated);
          navigate("/");
        }}
      >
        <Form>
          <table>
            <tbody>
              <tr>
                <td>ID</td>
                <td>{customerData.id}</td>
              </tr>
              <tr>
                <td className="label">
                  <label htmlFor="company">Company*</label>
                </td>
                <td className="field">
                  <Field id="company" name="company" required />
                </td>
              </tr>
              <tr>
                <td className="label">
                  <label htmlFor="about">About*</label>
                </td>
                <td className="field">
                  <Field id="about" name="about" as="textarea" required />
                </td>
              </tr>
              <tr>
                <td className="label">
                  <label htmlFor="industry">Industry</label>
                </td>
                <td className="field">
                  <Field id="industry" name="industry" as="select">
                    {generateOptions(INDUSTRIES)}
                  </Field>
                </td>
              </tr>
              <tr>
                <td className="label">
                  <label htmlFor="isActive">Is active</label>
                </td>
                <td className="field">
                  <Field id="isActive" name="isActive" as="select">
                    {generateOptions(["yes", "no"])}
                  </Field>
                </td>
              </tr>
              <tr>
                <td></td>
                <td className="field">
                  <button type="submit">Update</button>
                </td>
              </tr>
            </tbody>
          </table>
        </Form>
      </Formik>
    </div>
  );
};

export default Edit;
