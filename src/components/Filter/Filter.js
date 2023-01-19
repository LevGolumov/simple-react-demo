import FilterSelection from "./FilterSelection";
import FilterOption from "./FilterOption";
import { useContext } from "react";
import NamingContext from "../../context/naming-context";

function Filter(props) {
  const namingCtx = useContext(NamingContext)
  const headers = namingCtx.headers
  const filterListOptions = namingCtx.filterListOptions

  return (
    <div style={{margin: '10px 0', textAlign: 'center'}}>
      <FilterSelection
      filterListOptions={headers}
        handleChoice={props.handleChoice}
        selectedOption={props.columnChoice}
      />
      <span style={{margin: '0 10px'}}>
      <FilterSelection
        filterListOptions={filterListOptions}
        handleChoice={props.handleChoice}
        selectedOption={props.signChoice}
      />
      </span>
      <FilterOption
        handleChange={props.handleChange}
        filteringOption={props.filteringOption}
      />
    </div>
  );
}

export default Filter;
