import React, { useContext } from "react";
import { useState, useMemo, useEffect, Fragment } from "react";
import TableHead from "./TableHead";
import TableBody from "./TableBody";
import Pagination from "../UI/Pagination";
import { useSelector, useDispatch } from "react-redux";
import { tableActions } from "../../store/store";
import { useParams, useNavigate } from "react-router-dom";
import NamingContext from "../../context/naming-context"
import classes from "./Table.module.css"
const axios = require("axios").default;

function Table({ ...props }) {
  const dispatch = useDispatch();
  const tableInfo = useSelector((state) => state.table.tableInfo);
  const [sortField, setSortField] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");
  const linesPerPage = useSelector((state) => state.table.linesPerPage);
  const history = useNavigate()
  const namingCtx = useContext(NamingContext)

  const headers = namingCtx.headers
  
  const { tablePage: currentPage }  = useParams();

  if (!Number.isInteger(+currentPage)) {
    const pageInteger = parseInt(currentPage)
    history(`../table/${pageInteger}`)
  }

  useEffect(() => {
    // getting and saving json from the server
    async function fetchTable() {
      const response = await axios.get(process.env.REACT_APP_API_LINK);
      dispatch(tableActions.setTable(response.data));
    }

    fetchTable();
  }, [dispatch]);


  // calculating needed line indexes for the correct rendering
  const lastListIndex = currentPage * linesPerPage;
  const firstListIndex = lastListIndex - linesPerPage;

  // first sorting of the lines by ascending or descending values if needed
  const sortedLines = useMemo(() => {
    if (sortField) {
      const sorted = [...tableInfo].sort((a, b) => {
        return (
          a[sortField].toString().localeCompare(b[sortField].toString(), "en", {
            numeric: true,
          }) * (sortOrder === "asc" ? 1 : -1)
        );
      });
      return sorted;
    }
    return tableInfo;
  }, [sortField, sortOrder, tableInfo]);

  // filtering the table after sorting
  const sortedAndFilteredLines = useMemo(() => {
    if (props.filteringOption !== "") {
      let filteringOption = props.filteringOption;

      if (
        //if filtering option supposed to be a number
        props.columnChoice === "amount" ||
        props.columnChoice === "distance"
      ) {
        // turning a string to a number
        filteringOption = +filteringOption;
      }

      if (props.signChoice === "=") {
        return sortedLines.filter(
          (line) => line[props.columnChoice] === filteringOption
        );
      } else if (props.signChoice === ">") {
        if (typeof filteringOption === "number") {
          return sortedLines.filter(
            (line) => line[props.columnChoice] > filteringOption
          );
        } else {
          return sortedLines.filter(
            (line) =>
              line[props.columnChoice].toLowerCase() >
              filteringOption.toLowerCase()
          );
        }
      } else if (props.signChoice === "<") {
        if (typeof filteringOption === "number") {
          return sortedLines.filter(
            (line) => line[props.columnChoice] < filteringOption
          );
        } else {
          return sortedLines.filter(
            (line) =>
              line[props.columnChoice].toLowerCase() <
              filteringOption.toLowerCase()
          );
        }
      } else if (props.signChoice === "Содержит") {
        if (typeof filteringOption === "number") {
          return sortedLines.filter((line) =>
            String(line[props.columnChoice]).includes(String(filteringOption))
          );
        } else {
          return sortedLines.filter((line) =>
            line[props.columnChoice]
              .toLowerCase()
              .includes(filteringOption.toLowerCase())
          );
        }
      }
    } else {
      return sortedLines;
    }
  }, [
    props.columnChoice,
    props.signChoice,
    props.filteringOption,
    sortedLines,
  ]);

  // slicing the table for the pagination
  const filteredPagination = useMemo(() => {
    return sortedAndFilteredLines.slice(firstListIndex, lastListIndex);
  }, [sortedAndFilteredLines, firstListIndex, lastListIndex]);

  let pageNumbers = [];

  // calculating the amount of pages
  for (let i = 1; i <= Math.ceil(sortedAndFilteredLines.length / linesPerPage); i++) {
    pageNumbers.push(i);
  }

  if (currentPage < 0 || isNaN(Number(currentPage)) || (pageNumbers.length < currentPage && pageNumbers.length !== 0) ) {
    history('../table/1')
  }

  return (
    <Fragment>
      
      <div className={ `${classes.tableWrap} ${classes["body--table"]}` }>
      <table className={classes.table}>
        <TableHead
          headers={headers}
          sortField={sortField}
          sortOrder={sortOrder}
          setSortField={setSortField}
          setSortOrder={setSortOrder}
        />
        <TableBody
          columns={headers}
          data={filteredPagination}
          filteringOptions={props.filteringOptions}
          linesPerPage={linesPerPage}
        />
      </table>
    </div>
    <Pagination
      currentPage={currentPage}
      pageNumbers={pageNumbers}
    />     
    </Fragment>
  );
}

export default Table;
