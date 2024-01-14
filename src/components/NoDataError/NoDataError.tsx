import { Link } from "react-router-dom";
import Header from "../Header";

const NoDataError = () => (
  <>
    <Header />
    <p>No data here! Please go to home to load data in the application.</p>
    <div>
      <Link to="/">
        <button>Go to home</button>
      </Link>
    </div>
  </>
);

export default NoDataError;
