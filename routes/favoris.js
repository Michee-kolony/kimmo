const express = require('express');
const { ajouterFavori, getfavoris } = require('../controllers/favoris');
const router = express.Router();

router.post('/', ajouterFavori);
router.get('/data', getfavoris);
module.exports = router 