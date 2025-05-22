// controller/estabelecimentoController.js
const EstabelecimentoService = require('../service/estabelecimentoService');

class EstabelecimentoController {
    async create(req, res) {
        try {
            const result = await EstabelecimentoService.create(req.body);
            res.status(201).json(result);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }

    async findAll(req, res) {
        try {
            const results = await EstabelecimentoService.findAll();
            res.json(results);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }

    async findById(req, res) {
        try {
            const result = await EstabelecimentoService.findById(req.params.id);
            if (!result) return res.status(404).json({ error: 'Estabelecimento não encontrado' });
            res.json(result);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }

    async update(req, res) {
        try {
            const result = await EstabelecimentoService.update(req.params.id, req.body);
            res.json(result);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }

    async delete(req, res) {
        try {
            await EstabelecimentoService.delete(req.params.id);
            res.status(204).send();
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }
}

module.exports = new EstabelecimentoController();
