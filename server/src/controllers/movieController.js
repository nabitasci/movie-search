const OmdbService = require("../services/omdbService/omdbService");
const CacheService = require("../services/cacheService/cacheService");

const omdbService = new OmdbService();

exports.searchMovies = async function(req, res) {
  const { keyword } = req.query;

  try {
    const data = await omdbService.getMovieList(keyword);
    return res.status(200).send(data);
  } catch (error) {
    return res.status(403).send(error);
  }
};

exports.clearMovieCache = async function(req, res) {
  try {
    const data = await omdbService.clearCache();
    return res.status(200).send(data);
  } catch (error) {
    return res.status(400).send(error);
  }
};
