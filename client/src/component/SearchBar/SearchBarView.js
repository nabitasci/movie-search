import React, { Component } from "react";
import PropTypes from "prop-types";
import { debounce } from "lodash";

import "./SearchBar.scss";

class SearchBarView extends Component {

  triggerSearch = debounce(value => {
    if (value.length >= 3 && value !== "") {
        this.props.handleSearch(value);
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

SearchBarView.propTypes = {
    handleSearch: PropTypes.func.isRequired
};

export default SearchBarView