import React, { Component } from "react";
import TableHeader from "./common/tableHeader";
import TableBody from "./common/tableBody";
import Like from "./common/like";

class MoviesTable extends React.Component {
  columns = [
    { path: "title", label: "Title" },
    { path: "genre.name", label: "Genre" },
    { path: "numberInStock", label: "Stock" },
    { path: "dailyRentalRate", label: "Rate" },
    {
      key: "like",
      content: (movie) => (
        <Like liked={movie.liked} onClick={() => this.props.onLike(movie)} />
      ),
    },
    {
      key: "delete",
      content: (movie) => (
        <button
          onClick={() => this.props.onDelete(movie)}
          className="btn btn-dander btn-sm"
        >
          Delete
        </button>
      ),
    },
  ];
  render() {
    const { movies, onDelete, onLike, onSort, sortColumns } = this.props;
    return (
      <table className="table">
        <TableHeader
          columns={this.columns}
          sortColumns={sortColumns}
          onSort={onSort}
        />
        <TableBody data={movies} sortColumns={sortColumns} onSort={onSort} />
      </table>
    );
  }
}

const MoviesTable = (props) => {};

export default MoviesTable;
