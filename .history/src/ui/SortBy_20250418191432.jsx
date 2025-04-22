import { useSearchParams } from "react-router-dom";
import Select from "./Select";

function SortBy({ options }) {
  const { searchParams, setSearchParams } = useSearchParams();
  function handleChange() {
    searchParams.set;
  }

  return <Select options={options} type="white" onChange={handleChange} />;
}

export default SortBy;
