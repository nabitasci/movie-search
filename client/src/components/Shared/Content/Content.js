import React, { Component } from "react";
import PropTypes from "prop-types";
import { Alert } from "../../Alert";
import { connect } from 'react-redux';
import { loading, success, fail } from '../../../actions/Application';
import searchMovie from "../../../services/MovieSearch";


class Content extends Component {
  alert = error => {
    const { dispatch } = this.props;
    Alert(error.title, error.message, "error");
    dispatch(success());
  };

constructor(){
  super();
  this.state = {
    movieList: {},
  }
}


triggerSearch = (value) => {
  searchMovie(value).then(res => {
    console.log(value)
    this.setState({ movieList: res });
  });
}

handleSearchKeyword(value) {
  clearTimeout(this.timer);

  if(value.length > 3 && value !== ''){
    this.timer = setTimeout(() => { this.triggerSearch(value) }, 2000);
  }
}

  render() {
    return (
      <div>
        <form>
          <input 
          type="search" 
          placeholder="Search..."  
          onChange={e => this.handleSearchKeyword(e.target.value)}
            />
        </form>
      </div>
    );
  }
}
Content.propTypes = {
  children: PropTypes.node.isRequired,
  dispatch: PropTypes.func.isRequired,
  application: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  movieList: state.movieList,
});

export default connect(Content)(mapStateToProps);
