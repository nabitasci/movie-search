import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { request } from "../../redux/modules/searchMovie";

import SearchBarView from "./SearchBarView";

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchMovie: {}
    };
  }

  search = value => {
    this.props.dispatch(request(value));
  };

  render() {
    return <SearchBarView handleSearch={this.search} />;
  }
}

SearchBar.propTypes = {
  dispatch: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  searchMovie: state.searchMovie
});

export default connect(mapStateToProps)(SearchBar);
