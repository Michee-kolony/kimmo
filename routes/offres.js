const express = require('express');
const { publie, getall, getone, deleteone, update } = require('../controllers/offres');
const router = express.Router();

router.post('/', publie);
router.get('/',getall);
router.get('/:id', getone);
router.put('/:id', update);
router.delete('/:id', deleteone);

module.exports = router;