import { Link } from "react-router-dom";

const Header = () => (
  <>
    <Link to="/">
      <img loading="lazy" src="/logo.svg" />
    </Link>
  </>
);

export default Header;
