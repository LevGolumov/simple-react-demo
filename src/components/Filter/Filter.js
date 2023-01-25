import FilterSelection from "./FilterSelection";
import FilterOption from "./FilterOption";
import { useContext } from "react";
import NamingContext from "../../context/naming-context";
import classes from "./Filter.module.css"

function Filter(props) {
  const namingCtx = useContext(NamingContext)
  const headers = namingCtx.headers
  const filterListOptions = namingCtx.filterListOptions

  return (
    <div className={classes.filter}>
      <span className={classes.selections}>
      <FilterSelection
      filterListOptions={headers}
        handleChoice={props.handleChoice}
        selectedOption={props.columnChoice}
      />
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
