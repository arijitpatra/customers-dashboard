import { Link } from "react-router-dom";
import BrandLogo from "../BrandLogo";

const Header = () => (
  <Link to="/">
    <BrandLogo />
  </Link>
);

export default Header;
