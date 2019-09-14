import React, { Component } from "react";
import PropTypes from "prop-types";

import "./MovieList.css";

class MovieListView extends Component {
  render() {
    const { searchMovie } = this.props;
    return (
      <div>
        <section className="gallery">
          {Object.values(searchMovie.movieList.data).map(item => (
            <figure key={item.imdbID} className="gallery__item">
              <img src={item.Poster} />
              <figcaption className="gallery__image-caption">
                {item.Title}
              </figcaption>
            </figure>
          ))}
        </section>
      </div>
    );
  }
}

MovieListView.propTypes = {
    searchMovie: PropTypes.object.isRequired
};
export default MovieListView;
