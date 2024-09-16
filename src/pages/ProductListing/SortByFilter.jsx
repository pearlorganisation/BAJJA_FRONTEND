import Select from "react-select";
const options = [
  { value: "High", label: "High" },
  { value: "Low", label: "Low" },
  { value: "Most Popular", label: "Most Popular" },
];
const customStyles = {
  container: (provided) => ({
    ...provided,
    width: '20%', // Ensure the container takes full width if needed
  }),
  control: (provided) => ({
    ...provided,
    minHeight: '3rem',
    height: 'auto',
    width: '100%',
    cursor: 'pointer'
  }),
  valueContainer: (provided) => ({
    ...provided,
    height: '100%', 
  }),
};
const SortByFilter = () => {
  return (
    <>
      <Select options={options} defaultValue={options[options.length - 1]}  styles={customStyles} /> 
    </>
  );
};

export default SortByFilter;
