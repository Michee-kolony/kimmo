const express = require('express');
const { ajouterFavori, getfavoris, deletefavoris, getone } = require('../controllers/favoris');
const router = express.Router();

router.post('/', ajouterFavori);
router.get('/', getfavoris);
router.get('/:id', getone);
router.delete('/:id', deletefavoris);
module.exports = router 