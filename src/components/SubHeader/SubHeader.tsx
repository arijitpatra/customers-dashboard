import styles from "./SubHeader.module.scss";
import { MdOutlineDiversity1 } from "react-icons/md";
import { Link } from "react-router-dom";

const SubHeader = () => {
  return (
    <div className={styles.subHeader}>
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
  );
};

export default SubHeader;
