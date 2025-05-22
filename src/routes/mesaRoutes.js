// routes/mesaRoutes.js
const express = require('express');
const router = express.Router();
const MesaController = require('../controller/mesaController');
const authMiddleware = require('../middleware/auth');

router.post('/', authMiddleware, MesaController.create);
router.get('/', authMiddleware, MesaController.findAll);
router.get('/:id', authMiddleware, MesaController.findById);
router.put('/:id', authMiddleware, MesaController.update);
router.delete('/:id', authMiddleware, MesaController.delete);

module.exports = router;