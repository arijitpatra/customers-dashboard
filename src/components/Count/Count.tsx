import styles from "./Count.module.scss";

interface CountProps {
  filteredCount: number;
  totalCount: number;
}

export const Count = ({ filteredCount, totalCount }: CountProps) => (
  <div className={`${styles.count}`}>
    <span className={`${styles.filteredCount}`}>{filteredCount}</span> /{" "}
    {totalCount} Customers
  </div>
);

export default Count;
