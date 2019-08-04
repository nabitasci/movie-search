const OmdbService = require('../services/omdbService/omdbService');

const omdbService = new OmdbService();

exports.search_movies = function(req, res){
    const { keyword } = req.query;

    return omdbService.makeConcurrentRequests(keyword)
      .then(data => res.status(201).send(data))
      .catch(error => res.status(400).send(error));

};

exports.clear_movie_cache = function(req, res) {

};
