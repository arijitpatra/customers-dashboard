import styles from "./Create.module.scss";
import { Formik, Field, Form } from "formik";
import Header from "../../components/Header";
import { INDUSTRIES } from "../../constants";
import { useContextData } from "../../context/DataContext";
import { Link, useNavigate } from "react-router-dom";
import { MdArrowBack } from "react-icons/md";
import { v4 as uuidv4 } from "uuid";
import { generateOptions } from "../../utils";

const Create = () => {
  const { contextData, updateContextData } = useContextData();
  const navigate = useNavigate();

  return (
    <div className={`${styles.create}`}>
      <Header />
      <h1>
        <Link to="/">
          <MdArrowBack className="react-icons" />
        </Link>
        Create
      </h1>
      <Formik
        initialValues={{
          id: uuidv4(),
          company: "",
          about: "",
          industry: "tech",
          isActive: "yes",
        }}
        onSubmit={(values) => {
          updateContextData([
            ...contextData,
            {
              id: values.id,
              company: values.company,
              about: values.about,
              industry: values.industry,
              isActive: values.isActive === "yes" ? true : false,
              projects: [],
            },
          ]);
          navigate("/");
        }}
      >
        <Form>
          <table>
            <tbody>
              <tr>
                <td className="label">
                  <label htmlFor="id">ID</label>
                </td>
                <td className="field">
                  <Field id="id" name="id" className="border-none" disabled />
                </td>
              </tr>
              <tr>
                <td className="label">
                  <label htmlFor="company">Company*</label>
                </td>
                <td className="field">
                  <Field
                    id="company"
                    name="company"
                    placeholder="Acme Co."
                    required
                  />
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
                  <button type="submit">Submit</button>
                </td>
              </tr>
            </tbody>
          </table>
        </Form>
      </Formik>
    </div>
  );
};

export default Create;
