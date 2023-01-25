import classes from "./FilterSelection.module.css"

function FilterSelection(props) {
  
  // rendering filtering menu from the props
  return (
    <select className={`${classes.selection} ${classes['filter__selection']}`} onChange={props.handleChoice} defaultValue={props.selectedOption}>
      {props.filterListOptions.map((filterOption) => {
        if (filterOption.sortable) {
          return (
            <option key={filterOption.key} id={filterOption.key}>
              {filterOption.label}
            </option>
          );
        } else {
            return null
        }
      })}
    </select>
  );
}

export default FilterSelection;
