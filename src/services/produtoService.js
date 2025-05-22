// service/produtoService.js
const ProdutoRepository = require('../repository/produtoRepository');

class ProdutoService {
    async create(produto) {
        return ProdutoRepository.create(produto);
    }

    async findAll() {
        return ProdutoRepository.findAll();
    }

    async findById(id) {
        return ProdutoRepository.findById(id);
    }

    async update(id, data) {
        return ProdutoRepository.update(id, data);
    }

    async delete(id) {
        return ProdutoRepository.delete(id);
    }
}

module.exports = new ProdutoService();
