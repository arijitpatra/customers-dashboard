import "./index.scss";
import { Formik, Field, Form } from "formik";
import Header from "../../components/Header";
import { INDUSTRIES } from "../../constants";
import { useContextData } from "../../context/DataContext";
import { Link, useNavigate } from "react-router-dom";
import { MdArrowBack } from "react-icons/md";

const generateOptions = (list: string[]) =>
  list.map((item) => {
    return <option value={item}>{item}</option>;
  });

const Create = () => {
  const { contextData, updateContextData } = useContextData();
  const navigate = useNavigate();
  console.log("create");

  return (
    <div className="create">
      <Header />
      <h1>
        <Link to="/">
          <MdArrowBack className="react-icons" />
        </Link>
        Create
      </h1>
      <Formik
        initialValues={{
          id: "",
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
            <tr>
              <td className="label">
                <label htmlFor="id">ID</label>
              </td>
              <td className="field">
                <Field id="id" name="id" placeholder="12345" />
              </td>
            </tr>
            <tr>
              <td className="label">
                <label htmlFor="company">Company</label>
              </td>
              <td className="field">
                <Field id="company" name="company" placeholder="Acme Co." />
              </td>
            </tr>
            <tr>
              <td className="label">
                <label htmlFor="about">About</label>
              </td>
              <td className="field">
                <Field id="about" name="about" as="textarea" />
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
          </table>
        </Form>
      </Formik>
    </div>
  );
};

export default Create;
