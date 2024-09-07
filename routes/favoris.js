const express = require('express');
const { ajouterFavori } = require('../controllers/favoris');
const router = express.Router();

router.post('/', ajouterFavori);

module.exports = router 