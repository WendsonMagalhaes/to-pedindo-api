// routes/produtoRoutes.js
const express = require('express');
const router = express.Router();
const ProdutoController = require('../controller/produtoController');
const authMiddleware = require('../middleware/auth');

router.post('/', authMiddleware, ProdutoController.create);
router.get('/', authMiddleware, ProdutoController.findAll);
router.get('/:id', authMiddleware, ProdutoController.findById);
router.put('/:id', authMiddleware, ProdutoController.update);
router.delete('/:id', authMiddleware, ProdutoController.delete);

module.exports = router;
