const express = require("express");
const movieController = require('../controllers/movieController');
const router = express.Router();
 
router.use(function(req, res, next) { 
    res.header("Access-Control-Allow-Origin", "*"); 
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept"); 
    next();
 });

router.get("/api/search?", movieController.search_movies);
router.delete("/api/clear", movieController.clear_movie_cache);
 
module.exports = router;