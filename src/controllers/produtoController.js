// controller/produtoController.js
const ProdutoService = require('../service/produtoService');

class ProdutoController {
    async create(req, res) {
        try {
            const result = await ProdutoService.create(req.body);
            res.status(201).json(result);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }

    async findAll(req, res) {
        try {
            const results = await ProdutoService.findAll();
            res.json(results);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }

    async findById(req, res) {
        try {
            const result = await ProdutoService.findById(req.params.id);
            if (!result) return res.status(404).json({ error: 'Produto não encontrado' });
            res.json(result);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }

    async update(req, res) {
        try {
            const result = await ProdutoService.update(req.params.id, req.body);
            res.json(result);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }

    async delete(req, res) {
        try {
            await ProdutoService.delete(req.params.id);
            res.status(204).send();
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }
}

module.exports = new ProdutoController();
