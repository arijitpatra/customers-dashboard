import { MdFilterAlt } from "react-icons/md";
import { generateOptions } from "../../utils";

interface FilterProps {
  label: string;
  options: string[];
  value: string;
  onFilterChange: React.ChangeEventHandler<HTMLSelectElement>;
}

const Filter = ({ label, options, value, onFilterChange }: FilterProps) => {
  return (
    <div>
      <MdFilterAlt className="react-icons" /> {label}:{" "}
      <select onChange={onFilterChange} value={value}>
        {generateOptions(options)}
      </select>
    </div>
  );
};

export default Filter;
