// service/comandaService.js
const ComandaRepository = require('../repository/comandaRepository');

class ComandaService {
    async create(comanda) {
        return ComandaRepository.create(comanda);
    }

    async findAll() {
        return ComandaRepository.findAll();
    }

    async findById(id) {
        return ComandaRepository.findById(id);
    }

    async update(id, data) {
        return ComandaRepository.update(id, data);
    }

    async delete(id) {
        return ComandaRepository.delete(id);
    }
}

module.exports = new ComandaService();
