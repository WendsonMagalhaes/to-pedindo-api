// routes/cardapioRoutes.js
const express = require('express');
const router = express.Router();
const CardapioController = require('../controller/cardapioController');
const authMiddleware = require('../middleware/auth');

router.post('/', authMiddleware, CardapioController.create);
router.get('/', authMiddleware, CardapioController.findAll);
router.get('/:id', authMiddleware, CardapioController.findById);
router.put('/:id', authMiddleware, CardapioController.update);
router.delete('/:id', authMiddleware, CardapioController.delete);

module.exports = router;