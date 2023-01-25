import classes from "./TableHead.module.css";

function TableHead({
  sortField,
  sortOrder,
  setSortField,
  setSortOrder,
  headers,
}) {
  function handleHeadingSort(key) {
    
    const newSortOrder =
      key === sortField && sortOrder === "asc" ? "desc" : "asc";
    setSortField(key);
    setSortOrder(newSortOrder);
  }

  function SortButton(props) {
    const sortDirection = props.row.sortable
      ? sortField === props.row.key && sortOrder === "desc"
        ? "sort-button sort-reverse"
        : "sort-button"
      : "invisible";
    return (
      <button
        onClick={
          props.row.sortable ? () => handleHeadingSort(props.row.key) : null
        }
        className={sortDirection}
      >
        {sortField === props.row.key ? "▲" : "⧗"}
      </button>
    );
  }

  return (
    <thead className={classes["table__head"]}>
      <tr>
        {headers.map((row) => {
          return (
            <th className={classes["table__head--name"]} key={row.key}>
              {row.label} <SortButton key={row.key} row={row} />
            </th>
          );
        })}
      </tr>
    </thead>
  );
}

export default TableHead;
