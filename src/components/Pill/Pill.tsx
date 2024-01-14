import { ReactNode } from "react";
import styles from "./Pill.module.scss";

interface PillProps {
  children: ReactNode;
}

const Pill = ({ children }: PillProps) => (
  <span className={`${styles.pill}`}>{children}</span>
);

export default Pill;
