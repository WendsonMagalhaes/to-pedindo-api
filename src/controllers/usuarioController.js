// src/controllers/usuarioController.js
const usuarioService = require('../services/usuarioService');

class UsuarioController {
    async register(req, res) {
        try {
            const usuario = await usuarioService.register(req.body);
            res.status(201).json(usuario);
        } catch (err) {
            res.status(400).json({ error: err.message });
        }
    }

    async login(req, res) {
        try {
            const result = await usuarioService.login(req.body);
            res.json(result);
        } catch (err) {
            res.status(400).json({ error: err.message });
        }
    }

    async list(_, res) {
        try {
            const users = await usuarioService.list();
            res.json(users);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }

    async findById(req, res) {
        try {
            const user = await usuarioService.findById(req.params.id);
            if (!user) return res.status(404).json({ error: 'Usuário não encontrado' });
            res.json(user);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }
    async findByPhone(req, res) {
        try {
            const { telefone } = req.params;
            const usuario = await usuarioService.findByPhone(telefone);
            res.json(usuario);
        } catch (err) {
            res.status(404).json({ error: err.message });
        }
    }


    async update(req, res) {
        try {
            const user = await usuarioService.update(req.params.id, req.body);
            res.json(user);
        } catch (err) {
            res.status(400).json({ error: err.message });
        }
    }

    async updateAcess(req, res) {
        try {
            const { id } = req.params;
            const { acesso } = req.body;

            const usuario = await usuarioService.updateAcess(id, acesso);
            res.json(usuario);
        } catch (err) {
            res.status(400).json({ error: err.message });
        }
    }

    async delete(req, res) {
        try {
            await usuarioService.remove(req.params.id);
            res.status(204).send();
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }
}

module.exports = new UsuarioController();
