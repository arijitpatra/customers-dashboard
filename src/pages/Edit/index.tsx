import "./index.scss";
import { Formik, Field, Form } from "formik";
import Header from "../../components/Header";
import { INDUSTRIES } from "../../constants";
import { useContextData } from "../../context/DataContext";
import { useNavigate, useParams } from "react-router-dom";

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
  console.log(customerData);

  if (customerData?.length === 0) {
    return "Loading...";
  }

  return (
    <div className="edit">
      <Header />
      <Formik
        initialValues={{
          id: customerData.id,
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
            <tr>
              <td>
                <label htmlFor="id">ID</label>
              </td>
              <td>
                <Field id="id" name="id" disabled />
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="company">Company</label>
              </td>
              <td>
                <Field id="company" name="company" />
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
            <td></td>
            <td>
              <button type="submit">Submit</button>
            </td>
          </table>

          <div></div>
        </Form>
      </Formik>
    </div>
  );
};

export default Edit;
