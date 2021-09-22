import React from "react";
import "./Pagination.css";

function Pagination({ snippetsPerPage, totalSnippets, paginate }) {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalSnippets / snippetsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <div className="pagination">
      <ul>
        {pageNumbers.map((number) => (
          <li key={number}>
            <a onClick={() => paginate(number)} href="#">
              <button className="change_page_buttons">{number}</button>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Pagination;
