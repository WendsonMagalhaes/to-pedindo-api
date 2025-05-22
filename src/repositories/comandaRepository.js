// repository/comandaRepository.js
const db = require('../config/db');

class ComandaRepository {
    async create(comanda) {
        const { mesa_id, usuario_id, total, desconto } = comanda;
        return db.one(
            'INSERT INTO comandas (mesa_id, usuario_id, total, desconto) VALUES ($1, $2, $3, $4) RETURNING *',
            [mesa_id, usuario_id, total, desconto]
        );
    }

    async findAll() {
        return db.any('SELECT * FROM comandas');
    }

    async findById(id) {
        return db.oneOrNone('SELECT * FROM comandas WHERE id = $1', [id]);
    }

    async update(id, data) {
        const { mesa_id, usuario_id, total, desconto } = data;
        return db.one(
            'UPDATE comandas SET mesa_id = $1, usuario_id = $2, total = $3, desconto = $4 WHERE id = $5 RETURNING *',
            [mesa_id, usuario_id, total, desconto, id]
        );
    }

    async delete(id) {
        return db.result('DELETE FROM comandas WHERE id = $1', [id]);
    }
}

module.exports = new ComandaRepository();
