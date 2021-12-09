import React, { Component } from "react";
import _ from "lodash";
/*Lodash is the optimized version of popular js library underscore
When using map operator we need to assign a key*/

const Pagination = (props) => {
  const { itemCount, pageSize } = props;
  const pagesCount = Math.ceil(itemCount / pageSize);
  if (pagesCount === 1) return null;
  const pages = _.range(1, pagesCount + 1);
  // [1...pagesCount].map()

  return (
    <nav>
      <ul className="pagination">
        {pages.map((page) => (
          <li key={page} className="page-item">
            <a className="page-link">{page}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
