// service/pedidoService.js
const PedidoRepository = require('../repository/pedidoRepository');

class PedidoService {
    async create(pedido) {
        return PedidoRepository.create(pedido);
    }

    async findAll() {
        return PedidoRepository.findAll();
    }

    async findById(id) {
        return PedidoRepository.findById(id);
    }

    async update(id, data) {
        return PedidoRepository.update(id, data);
    }

    async delete(id) {
        return PedidoRepository.delete(id);
    }
}

module.exports = new PedidoService();
