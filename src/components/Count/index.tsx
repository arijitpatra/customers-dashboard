import "./index.scss";

interface CountProps {
  filteredCount: number;
  totalCount: number;
}

export const Count = ({ filteredCount, totalCount }: CountProps) => (
  <div className="count">
    <span className="filtered-count">{filteredCount}</span> / {totalCount}{" "}
    Customers
  </div>
);

export default Count;
