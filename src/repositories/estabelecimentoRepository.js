// repository/estabelecimentoRepository.js
const db = require('../config/db');

class EstabelecimentoRepository {
    async create(estabelecimento) {
        const { nome, endereco, telefone } = estabelecimento;
        return db.one(
            'INSERT INTO estabelecimentos (nome, endereco, telefone) VALUES ($1, $2, $3) RETURNING *',
            [nome, endereco, telefone]
        );
    }

    async findAll() {
        return db.any('SELECT * FROM estabelecimentos');
    }

    async findById(id) {
        return db.oneOrNone('SELECT * FROM estabelecimentos WHERE id = $1', [id]);
    }

    async update(id, data) {
        const { nome, endereco, telefone } = data;
        return db.one(
            'UPDATE estabelecimentos SET nome = $1, endereco = $2, telefone = $3 WHERE id = $4 RETURNING *',
            [nome, endereco, telefone, id]
        );
    }

    async delete(id) {
        return db.result('DELETE FROM estabelecimentos WHERE id = $1', [id]);
    }
}

module.exports = new EstabelecimentoRepository();
