import React from "react";
import { Link } from "react-router-dom";

export default function Pagination({
  currentPage,
  pageNumbers
}) {

  return (
    <div className="pagination">
      {pageNumbers.map((index) => {
        return (
            <Link key={index} to={`../table/${index}`}>
          <button
            className={index === Number(currentPage) ? "btn btn__active" : "btn"}            
          >
            {index}
          </button>
          </Link>
        );
      })}
    </div>
  );
}
