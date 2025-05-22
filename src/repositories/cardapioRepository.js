// repository/cardapioRepository.js
class CardapioRepository {
    async create(cardapio) {
        const { estabelecimento_id } = cardapio;
        return db.one(
            'INSERT INTO cardapios (estabelecimento_id) VALUES ($1) RETURNING *',
            [estabelecimento_id]
        );
    }

    async findAll() {
        return db.any('SELECT * FROM cardapios');
    }

    async findById(id) {
        return db.oneOrNone('SELECT * FROM cardapios WHERE id = $1', [id]);
    }

    async update(id, data) {
        const { estabelecimento_id } = data;
        return db.one(
            'UPDATE cardapios SET estabelecimento_id = $1 WHERE id = $2 RETURNING *',
            [estabelecimento_id, id]
        );
    }

    async delete(id) {
        return db.result('DELETE FROM cardapios WHERE id = $1', [id]);
    }
}

module.exports = new CardapioRepository();
