import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import searchMovie from "../../redux/modules/searchMovie";
import Loading from "../../component/Shared/Loading";
import Failed from "../../component/Shared/Failed";
import { API_STATUS } from "../../util/api";

import "./MovieList.css";

class MovieList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchMovie
    };
  }

  isInit = state => state.status === API_STATUS.INIT;
  isLoading = state => state.status === API_STATUS.LOADING;
  isFetched = state => state.status === API_STATUS.FETCHED;
  isFailed = state => state.status === API_STATUS.FAILED;

  render() {
    const { searchMovie } = this.props;

    if (this.isLoading(searchMovie)) {
      return <Loading />;
    }

    // Failed component updated
    if (this.isFailed(searchMovie)) {
      return <Failed error={"Please do not use spacial char."} />;
    }

    // Empty state control if state is not initial state
    if (this.isFetched(searchMovie) && !this.isInit(searchMovie)) {
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
    return true;
  }
}

MovieList.propTypes = {
  dispatch: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  searchMovie: state.searchMovie
});

export default connect(mapStateToProps)(MovieList);
