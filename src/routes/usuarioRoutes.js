// src/routes/usuarioRoutes.js
const express = require('express');
const usuarioController = require('../controllers/usuarioController');
const auth = require('../middlewares/auth');
const authorize = require('../middlewares/authorize');

const router = express.Router();

router.post('/register', usuarioController.register);
router.post('/login', usuarioController.login);
router.get('/telefone/:telefone', usuarioController.findByPhone);

router.use(auth);
router.get('/list', usuarioController.list);
router.get('/', authorize('admin'), usuarioController.list);
router.get('/:id', usuarioController.findById);
router.get('/telefone/:telefone', usuarioController.findByPhone);
router.put('/:id', usuarioController.update);
router.patch('/:id/acesso', usuarioController.updateAcess);
router.delete('/:id', usuarioController.delete);

module.exports = router;
