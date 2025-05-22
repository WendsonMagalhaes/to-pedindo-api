// controller/comandaController.js
const ComandaService = require('../service/comandaService');

class ComandaController {
    async create(req, res) {
        try {
            const result = await ComandaService.create(req.body);
            res.status(201).json(result);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }

    async findAll(req, res) {
        try {
            const results = await ComandaService.findAll();
            res.json(results);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }

    async findById(req, res) {
        try {
            const result = await ComandaService.findById(req.params.id);
            if (!result) return res.status(404).json({ error: 'Comanda não encontrada' });
            res.json(result);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }

    async update(req, res) {
        try {
            const result = await ComandaService.update(req.params.id, req.body);
            res.json(result);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }

    async delete(req, res) {
        try {
            await ComandaService.delete(req.params.id);
            res.status(204).send();
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }
}

module.exports = new ComandaController();