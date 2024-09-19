import Select from "react-select";
const options = [
  { value: "High", label: "High" },
  { value: "Low", label: "Low" },
  { value: "Most Popular", label: "Most Popular" },
];
const customStyles = {
  container: (provided) => ({
    ...provided,
    minwidth: '20%',
    maxwidth: "100%"
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
      <Select className="w-full md:w-auto mx-1" options={options} defaultValue={options[options.length - 1]} styles={customStyles} />
    </>
  );
};

export default SortByFilter;
