// repository/mesaRepository.js
const db = require('../config/db');

class MesaRepository {
    async create(mesa) {
        const { usuario_id, estabelecimento_id, total_pago, total_pagar } = mesa;
        return db.one(
            'INSERT INTO mesas (usuario_id, estabelecimento_id, total_pago, total_pagar) VALUES ($1, $2, $3, $4) RETURNING *',
            [usuario_id, estabelecimento_id, total_pago, total_pagar]
        );
    }

    async findAll() {
        return db.any('SELECT * FROM mesas');
    }

    async findById(id) {
        return db.oneOrNone('SELECT * FROM mesas WHERE id = $1', [id]);
    }

    async update(id, data) {
        const { usuario_id, estabelecimento_id, total_pago, total_pagar } = data;
        return db.one(
            'UPDATE mesas SET usuario_id = $1, estabelecimento_id = $2, total_pago = $3, total_pagar = $4 WHERE id = $5 RETURNING *',
            [usuario_id, estabelecimento_id, total_pago, total_pagar, id]
        );
    }

    async delete(id) {
        return db.result('DELETE FROM mesas WHERE id = $1', [id]);
    }
}

module.exports = new MesaRepository();
