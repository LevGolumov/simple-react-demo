
function TableHead({sortField, sortOrder, setSortField, setSortOrder, headers}){
  
  function handleHeadingSort(key){
    const newSortOrder = key === sortField && sortOrder === "asc" ? "desc" : "asc";
    setSortField(key);
    setSortOrder(newSortOrder);
  }

  function SortButton(props){
    const sortDirection = props.row.sortable 
            ? sortField === props.row.key && sortOrder === "desc"
            ? "sort-button sort-reverse"
            : "sort-button"
            : "invisible"
    return (
    <button
    onClick={props.row.sortable ? () => handleHeadingSort(props.row.key) : null}
    className={sortDirection}>
      {sortField === props.row.key ? "▲" : "⧗" }
      </button>)
  }

    return (
        <thead>
        <tr>
          {headers.map((row) => {
            return <th key={row.key}>{row.label} <SortButton key={row.key} row={row} /></th>;
          })}
        </tr>
      </thead>
    )
}

export default TableHead