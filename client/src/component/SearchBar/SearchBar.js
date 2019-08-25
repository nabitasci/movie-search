import React, { Component } from "react";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import searchMovie, { request } from '../../redux/modules/searchMovie';
import {isLoading, isFailed } from '../../util/stateHelpers';
import Loading from '../Shared/Loading/Loading.js';
import Failed from '../Shared/Failed/Failed.js';

import './SearchBar.scss';

class SearchBar extends Component {

  constructor(props){
    super(props);

    this.state = {
      searchMovie: {},
    } 
  }


  triggerSearch = (value) => {
    this.props.dispatch(request(value));
   
  }

  handleSearchKeyword(value) {
    clearTimeout(this.timer);

    if(value.length > 3 && value !== ''){
      this.timer = setTimeout(() => { this.triggerSearch(value) }, 2000);
    }
  }

  render() {
    if (isLoading(searchMovie)) {
      return <Loading />;
    }

    if (isFailed(searchMovie)) {
      return <Failed />;
    }
    return (
      <div>
        <div className="searchForm" >
          <input 
          type="search" 
          placeholder="Search..."  
          onChange={e => this.handleSearchKeyword(e.target.value)}
          onKeyPress={(e) => {
            if (e.key === 'Enter') {
              this.triggerSearch(e.target.value)
            }
          }}
            />
        </div>
      </div>
    );
  }
}

SearchBar.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  searchMovie: state.searchMovie,
});

export default connect(mapStateToProps)(SearchBar);