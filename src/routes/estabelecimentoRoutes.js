// routes/estabelecimentoRoutes.js
const express = require('express');
const router = express.Router();
const EstabelecimentoController = require('../controller/estabelecimentoController');
const authMiddleware = require('../middleware/auth');

router.post('/', authMiddleware, EstabelecimentoController.create);
router.get('/', authMiddleware, EstabelecimentoController.findAll);
router.get('/:id', authMiddleware, EstabelecimentoController.findById);
router.put('/:id', authMiddleware, EstabelecimentoController.update);
router.delete('/:id', authMiddleware, EstabelecimentoController.delete);

module.exports = router;