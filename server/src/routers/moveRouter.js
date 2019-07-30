const express = require("express");
const movieController = require('../controllers/movieController');
const router = express.Router();
 
router.get("/api/search?", (request, response, next) => {
    const { keyword } = request.query;
    let result = movieController.search_movies(keyword);
    response.send(`Name : ${result}`);
});
 
module.exports = router;