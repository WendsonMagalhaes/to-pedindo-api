const db = require('../config/db');

const usuarioRepository = {
    async create({ nome, telefone, senha_hash, acesso = 'cliente' }) {
        const query = `
        INSERT INTO usuarios (nome, telefone, senha_hash, acesso)
        VALUES ($1, $2, $3, $4)
        RETURNING id, nome, telefone, acesso;
    `;
        const values = [nome, telefone, senha_hash, acesso];
        const { rows } = await db.query(query, values);
        return rows[0];
    },

    async findAll() {
        const result = await db.query('SELECT id, nome, telefone FROM usuarios');
        return result.rows;
    },

    async findById(id) {
        const result = await db.query('SELECT id, nome, telefone FROM usuarios WHERE id = $1', [id]);
        return result.rows[0];
    },
    async findByPhone(telefone) {
        const query = 'SELECT * FROM usuarios WHERE telefone = $1 LIMIT 1';
        const result = await db.query(query, [telefone]);
        return result.rows[0];
    },

    async findOneByField(field, value) {
        const query = `SELECT * FROM usuarios WHERE ${field} = $1 LIMIT 1`;
        const result = await db.query(query, [value]);
        return result.rows[0];
    },

    async update(id, { nome, telefone }) {
        const query = `
            UPDATE usuarios
            SET nome = $1, telefone = $2
            WHERE id = $3
            RETURNING id, nome, telefone;
        `;
        const values = [nome, telefone, id];
        const result = await db.query(query, values);
        return result.rows[0];
    },
    async updateAcess(id, acesso) {
        const query = `
        UPDATE usuarios
        SET acesso = $1
        WHERE id = $2
        RETURNING id, nome, telefone, acesso;
    `;
        const result = await db.query(query, [acesso, id]);
        return result.rows[0];
    }
    ,

    async delete(id) {
        await db.query('DELETE FROM usuarios WHERE id = $1', [id]);
    },
};

module.exports = usuarioRepository;
