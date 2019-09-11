const OmdbService = require('../services/omdbService/omdbService');
const CacheService = require('../services/cacheService/cacheService')

const omdbService = new OmdbService();


exports.search_movies = async function(req, res){
    const { keyword } = req.query;

    try {
      const data = await omdbService.getMovieList(keyword);
      return res.status(200).send(data);
   }
   catch (error) {
      console.log(error);
      return res.status(403).send(error);
   }

};

exports.clear_movie_cache = async function(req, res) {
   try {
      const data = await omdbService.clearCache();
      return res.status(200).send(data);
   } catch (error){
      return res.status(400).send(error);
   }
};
