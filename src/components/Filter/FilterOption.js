import classes from "./FilterOption.module.css"
function FilterOption(props){
    // rendering filtering input field
    return (
        <input className={classes.option} onChange={props.handleChange} type="text" value={props.filteringOption} >
        </input>
    )
};

export default FilterOption;