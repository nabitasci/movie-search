import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { request } from "../../redux/modules/searchMovie";
import { debounce } from "lodash";

import "./SearchBar.scss";

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchMovie: {}
    };
  }

  triggerSearch = debounce(value => {
    if (value.length >= 3 && value !== "") {
      this.props.dispatch(request(value));
    }
  }, 300);

  render() {
    return (
      <div>
        <div className="searchForm">
          <input
            type="search"
            placeholder="Search..."
            onChange={e => this.triggerSearch(e.target.value)}
            onKeyPress={e => {
              if (e.key === "Enter") {
                this.triggerSearch(e.target.value);
              }
            }}
          />
        </div>
      </div>
    );
  }
}

SearchBar.propTypes = {
  dispatch: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  searchMovie: state.searchMovie
});

export default connect(mapStateToProps)(SearchBar);
