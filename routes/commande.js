const express = require('express');
const { publie, getall, getone, deleteone } = require('../controllers/commande');

const router = express.Router();

router.post('/', publie);
router.get('/', getall);
router.get('/:id', getone);
router.delete('/:id', deleteone );

module.exports = router;