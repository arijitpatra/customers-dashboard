import { ReactElement } from "react";
import styles from "./Pill.module.scss";

interface PillProps {
  children: ReactElement;
}

const Pill = ({ children }: PillProps) => (
  <span className={`${styles.pill}`}>{children}</span>
);

export default Pill;
