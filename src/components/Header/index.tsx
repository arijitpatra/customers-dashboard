import { MdOutlineDiversity1 } from "react-icons/md";
import { Link } from "react-router-dom";

const Header = () => (
  <>
    <Link to="/">
      <img loading="lazy" src="/logo.svg" />
      <div className="sub-header">
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
    </Link>
  </>
);

export default Header;
