// service/mesaService.js
const MesaRepository = require('../repository/mesaRepository');

class MesaService {
    async create(mesa) {
        return MesaRepository.create(mesa);
    }

    async findAll() {
        return MesaRepository.findAll();
    }

    async findById(id) {
        return MesaRepository.findById(id);
    }

    async update(id, data) {
        return MesaRepository.update(id, data);
    }

    async delete(id) {
        return MesaRepository.delete(id);
    }
}

module.exports = new MesaService();