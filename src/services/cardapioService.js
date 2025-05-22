// service/cardapioService.js
const CardapioRepository = require('../repository/cardapioRepository');

class CardapioService {
    async create(cardapio) {
        return CardapioRepository.create(cardapio);
    }

    async findAll() {
        return CardapioRepository.findAll();
    }

    async findById(id) {
        return CardapioRepository.findById(id);
    }

    async update(id, data) {
        return CardapioRepository.update(id, data);
    }

    async delete(id) {
        return CardapioRepository.delete(id);
    }
}

module.exports = new CardapioService();
