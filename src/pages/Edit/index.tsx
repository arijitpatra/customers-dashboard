import "./index.scss";
import { Formik, Field, Form } from "formik";
import Header from "../../components/Header";
import { INDUSTRIES } from "../../constants";
import { useContextData } from "../../context/DataContext";
import { Link, useNavigate, useParams } from "react-router-dom";
import { MdArrowBack } from "react-icons/md";

const generateOptions = (list: string[]) =>
  list.map((item) => {
    return (
      <option value={item} key={item}>
        {item}
      </option>
    );
  });

const Edit = () => {
  const { contextData, updateContextData } = useContextData();
  const navigate = useNavigate();
  const { customerId } = useParams();
  const customerData = contextData.filter((item) => item.id === customerId)[0];

  if (customerData?.length === 0) {
    return "Loading...";
  }

  return (
    <div className="edit">
      <Header />
      <h1>
        <Link to="/">
          <MdArrowBack className="react-icons" />
        </Link>
        Edit
      </h1>
      <Formik
        initialValues={{
          //   id: customerData.id,
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
                <td className="label">
                  <label htmlFor="company">Company</label>
                </td>
                <td className="field">
                  <Field id="company" name="company" />
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
