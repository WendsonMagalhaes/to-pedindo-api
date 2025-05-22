// src/routes/index.js
import { Router } from 'express';
import usuarioCtrl from '../controllers/usuarioController.js';

const router = Router();

router.post('/register', usuarioCtrl.register);
router.post('/login', usuarioCtrl.login);
export default router;
