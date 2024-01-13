import { MdFilterAlt } from "react-icons/md";

const renderOption = (value: string) => (
  <option value={value} key={value}>
    {value}
  </option>
);

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
        {options.map((option: string) => {
          return renderOption(option);
        })}
      </select>
    </div>
  );
};

export default Filter;
