// routes/pedidoRoutes.js
const express = require('express');
const router = express.Router();
const PedidoController = require('../controller/pedidoController');
const authMiddleware = require('../middleware/auth');

router.post('/', authMiddleware, PedidoController.create);
router.get('/', authMiddleware, PedidoController.findAll);
router.get('/:id', authMiddleware, PedidoController.findById);
router.put('/:id', authMiddleware, PedidoController.update);
router.delete('/:id', authMiddleware, PedidoController.delete);

module.exports = router;
