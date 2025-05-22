// src/repositories/baseRepository.js
const db = require('../config/db');

class BaseRepository {
    constructor(table) {
        this.table = table;
    }

    async create(columns, values) {
        const cols = columns.join(', ');
        const placeholders = columns.map((_, i) => `$${i + 1}`).join(', ');
        const query = `INSERT INTO ${this.table} (${cols}) VALUES (${placeholders}) RETURNING *`;
        const { rows } = await db.query(query, values);
        return rows[0];
    }

    async findAll() {
        const { rows } = await db.query(`SELECT * FROM ${this.table} ORDER BY id`);
        return rows;
    }

    async findById(id) {
        const { rows } = await db.query(`SELECT * FROM ${this.table} WHERE id = $1`, [id]);
        return rows[0];
    }

    async update(id, data) {
        const columns = Object.keys(data);
        const values = Object.values(data);
        const set = columns.map((col, i) => `${col} = $${i + 1}`).join(', ');
        const query = `UPDATE ${this.table} SET ${set} WHERE id = $${columns.length + 1} RETURNING *`;
        const { rows } = await db.query(query, [...values, id]);
        return rows[0];
    }

    async delete(id) {
        await db.query(`DELETE FROM ${this.table} WHERE id = $1`, [id]);
    }

    // utilitário específico
    async findOneByField(field, value) {
        const { rows } = await db.query(`SELECT * FROM ${this.table} WHERE ${field} = $1`, [value]);
        return rows[0];
    }
}

module.exports = BaseRepository;
