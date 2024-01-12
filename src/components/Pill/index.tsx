import { ReactElement } from "react";
import "./index.scss";

interface PillProps {
  children: ReactElement;
}

const Pill = ({ children }: PillProps) => (
  <span className="pill">{children}</span>
);

export default Pill;
