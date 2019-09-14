import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import searchMovie from "../../redux/modules/searchMovie";
import Loading from "../../component/Shared/Loading";
import Failed from "../../component/Shared/Failed";
import { API_STATUS } from "../../util/api";
import MovieListView from "./MovieListView";


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
      return <MovieListView searchMovie={searchMovie} />;
    }
    return true;
  }
}

MovieList.propTypes = {
  searchMovie: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  searchMovie: state.searchMovie
});

export default connect(mapStateToProps)(MovieList);
