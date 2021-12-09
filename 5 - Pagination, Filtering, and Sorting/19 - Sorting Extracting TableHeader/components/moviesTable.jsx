import React, { Component } from "react";
import TableHeader from "./common/tableHeader";
import Like from "./common/like";

class MoviesTable extends React.Component {
  columns = [
    { path: "title", label: "Title" },
    { path: "genre.name", label: "Genre" },
    { path: "numberInStock", label: "Stock" },
    { path: "dailyRentalRate", label: "Rate" },
    //Two more for like and delete button which dont have path or label
    { key: "like" },
    { key: "delete" },
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
        <tbody>
          {movies.map((movie) => (
            <tr key={movie._id}>
              <td>{movie.title}</td>
              <td>{movie.genre.name}</td>
              <td>{movie.numberInStock}</td>
              <td>{movie.dailyRentalRate}</td>
              <td>
                <Like liked={movie.liked} onClick={() => onLike(movie)} />
              </td>
              <td>
                <button
                  onClick={() => onDelete(movie)}
                  className="btn btn-dander btn-sm"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

const MoviesTable = (props) => {};

export default MoviesTable;
