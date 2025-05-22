// routes/comandaRoutes.js
const express = require('express');
const router = express.Router();
const ComandaController = require('../controller/comandaController');
const authMiddleware = require('../middleware/auth');

router.post('/', authMiddleware, ComandaController.create);
router.get('/', authMiddleware, ComandaController.findAll);
router.get('/:id', authMiddleware, ComandaController.findById);
router.put('/:id', authMiddleware, ComandaController.update);
router.delete('/:id', authMiddleware, ComandaController.delete);

module.exports = router;