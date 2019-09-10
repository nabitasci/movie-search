const axios = require("axios");
const config = require("../../config/config.json");
const CacheService = require("../cacheService/cacheService");

const cacheService = new CacheService(30);

class omdbService {

  getMovieList(keyword) {
    return cacheService.get(keyword, () =>
      axios
        .all([
          axios.get(config.omdb_api_url + "&s=" + keyword + "&page=1"),
          axios.get(config.omdb_api_url + "&s=" + keyword + "&page=2")
        ])
        .then(
          axios.spread((response1, response2) => {

            if (response1.data.totalResults > 10) {
              return { ...response1.data.Search.concat(response2.data.Search) };
            } else {
              return { ...response1.data.Search };
            }
          })
        )
        .catch(error => { 
          return error;
        })
        .then(result => {
          return result;
        })
    );
  }

  clearCache() {
    return cacheService.flush();
  }
}

module.exports = omdbService;
