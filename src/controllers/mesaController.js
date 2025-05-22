// controller/mesaController.js
const MesaService = require('../service/mesaService');

class MesaController {
    async create(req, res) {
        try {
            const result = await MesaService.create(req.body);
            res.status(201).json(result);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }

    async findAll(req, res) {
        try {
            const results = await MesaService.findAll();
            res.json(results);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }

    async findById(req, res) {
        try {
            const result = await MesaService.findById(req.params.id);
            if (!result) return res.status(404).json({ error: 'Mesa não encontrada' });
            res.json(result);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }

    async update(req, res) {
        try {
            const result = await MesaService.update(req.params.id, req.body);
            res.json(result);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }

    async delete(req, res) {
        try {
            await MesaService.delete(req.params.id);
            res.status(204).send();
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }
}

module.exports = new MesaController();