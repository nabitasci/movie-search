import React, { Component } from "react";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import searchMovie, { request } from '../../redux/modules/searchMovie';
import { emptyStateItem, isFetched, isLoading, isFailed } from '../../util/stateHelpers';
import Loading from '../../component/Shared/Loading';
import Failed from '../../component/Shared/Failed';

import './MovieList.css';

class MovieList extends Component {

  constructor(props){
    super(props);

    this.state = {
      searchMovie
    } 
  }

  render() {
    const { searchMovie } = this.props;
 
    if (isLoading(searchMovie)) {
      return <Loading />;
    }
    
    if (isFailed(searchMovie)) {
      return <Failed />;
    }

    if (isFetched(searchMovie)) {
        return (
          <div>
            <section className="gallery">
            {searchMovie.movieList.data && Object.values(searchMovie.movieList.data).map( item  => (
              <figure className="gallery__item">
              <img src={item.Poster}/>
              <figcaption className="gallery__image-caption">
                {item.Title}
              </figcaption>
              </figure>  
            ))}
            </section>
          </div>
      );
    }
   return(true);
  }
}

MovieList.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  searchMovie: state.searchMovie,
});

export default connect(mapStateToProps)(MovieList);