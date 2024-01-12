import "./index.scss";
import { Formik, Field, Form } from "formik";
import Header from "../../components/Header";
import { INDUSTRIES } from "../../constants";
import { useContextData } from "../../context/DataContext";
import { useNavigate } from "react-router-dom";

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
              <td>
                <label htmlFor="id">ID</label>
              </td>
              <td>
                <Field id="id" name="id" placeholder="12345" />
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="company">Company</label>
              </td>
              <td>
                <Field id="company" name="company" placeholder="Acme Co." />
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="about">About</label>
              </td>
              <td>
                <Field id="about" name="about" as="textarea" />
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="industry">Industry</label>
              </td>
              <td>
                <Field id="industry" name="industry" as="select">
                  {generateOptions(INDUSTRIES)}
                </Field>
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="isActive">Is active</label>
              </td>
              <td>
                <Field id="isActive" name="isActive" as="select">
                  {generateOptions(["yes", "no"])}
                </Field>
              </td>
            </tr>
            <tr>
              <td></td>
              <td>
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
