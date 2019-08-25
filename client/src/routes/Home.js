import React from 'react';

import SearchBar from '../component/SearchBar';
import MovieList from '../component/MovieList'

const Home = () => (
  <div className="Home">
      <div >
        <SearchBar />
      </div>
      <div>
        <MovieList />
      </div>
  </div>
);

export default Home;