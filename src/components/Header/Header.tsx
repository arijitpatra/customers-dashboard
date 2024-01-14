import { Link } from "react-router-dom";

const Header = () => (
  <Link to="/">
    <img
      width="100"
      height="auto"
      loading="lazy"
      src="/logo.svg"
      alt="brand-logo"
    />
  </Link>
);

export default Header;
