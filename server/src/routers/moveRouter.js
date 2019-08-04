const express = require("express");
const movieController = require('../controllers/movieController');
const router = express.Router();
 
router.get("/api/search?", movieController.search_movies);
 
module.exports = router;