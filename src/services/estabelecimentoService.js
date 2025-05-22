// service/estabelecimentoService.js
const EstabelecimentoRepository = require('../repository/estabelecimentoRepository');

class EstabelecimentoService {
    async create(estabelecimento) {
        return EstabelecimentoRepository.create(estabelecimento);
    }

    async findAll() {
        return EstabelecimentoRepository.findAll();
    }

    async findById(id) {
        return EstabelecimentoRepository.findById(id);
    }

    async update(id, data) {
        return EstabelecimentoRepository.update(id, data);
    }

    async delete(id) {
        return EstabelecimentoRepository.delete(id);
    }
}

module.exports = new EstabelecimentoService();
