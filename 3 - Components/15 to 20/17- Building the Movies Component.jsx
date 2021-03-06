import React, { Component } from "react";
import { getMovies } from "./services/fakeMovieService";

class Movies extends React.Component {
  state = {
    movies: getMovies(),
  };

  render() {
    //tabel.table>thead>tr>th*4
    return (
      <tabel className="table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Stock</th>
            <th>Genre</th>
            <th>Rate</th>
          </tr>
        </thead>
        <tbody>
          {this.state.movies.map((movie) => (
            <tr>
              <td>{movie.title}</td>
              <td>{movie.genre.name}</td>
              <td>{movie.numberInStock}</td>
              <td>{movie.dailyRentalRate}</td>
            </tr>
          ))}
        </tbody>
      </tabel>
    );
  }
}

export default Movies;
