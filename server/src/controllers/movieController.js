const OmdbService = require('../services/omdbService/omdbService');

const omdbService = new OmdbService();

exports.search_movies = function(keyword) {
  return omdbService.makeConcurrentRequests(keyword);
};



exports.clear_movie_cache = function(req, res) {

};
