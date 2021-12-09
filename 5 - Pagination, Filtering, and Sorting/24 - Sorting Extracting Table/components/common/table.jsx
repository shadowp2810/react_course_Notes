import React from "react";
import TableHeader from ".tableHeader";
import TableBody from ".tableBody";

const Table = (props) => {
  const { columns, sortColumns, onSort, data } = props;
  return (
    <table className="table">
      <TableHeader
        columns={columns}
        sortColumns={sortColumns}
        onSort={onSort}
      />
      <TableBody data={data} columns={columns} />
    </table>
  );
};

export default Table;
