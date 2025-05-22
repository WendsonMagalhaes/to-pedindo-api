// src/services/usuarioService.js
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const usuarioRepo = require('../repositories/usuarioRepository');

const usuarioService = {
    async register({ nome, telefone, senha, acesso }) {
        const existente = await usuarioRepo.findOneByField('telefone', telefone);
        if (existente) throw new Error('Telefone já cadastrado');

        const hash = await bcrypt.hash(senha, 10);
        return usuarioRepo.create({ nome, telefone, senha_hash: hash, acesso });

    },

    async login({ telefone, senha }) {
        const user = await usuarioRepo.findOneByField('telefone', telefone);
        if (!user) throw new Error('Usuário não encontrado');

        const match = await bcrypt.compare(senha, user.senha_hash);
        if (!match) throw new Error('Credenciais inválidas');

        const token = jwt.sign(
            { id: user.id, role: user.acesso }, // ← aqui agora pega o valor correto
            process.env.JWT_SECRET,
            { expiresIn: '8h' }
        );

        return { user, token };
    },

    async list() {
        return usuarioRepo.findAll();
    },

    async findById(id) {
        return usuarioRepo.findById(id);
    },

    async findByPhone(telefone) {
        const user = await usuarioRepo.findByPhone(telefone);
        if (!user) throw new Error('Usuário não encontrado');
        return user;
    },

    async update(id, data) {
        if (data.senha) {
            data.senha_hash = await bcrypt.hash(data.senha, 10);
            delete data.senha;
        }
        return usuarioRepo.update(id, data);
    },
    async updateAcess(id, acesso) {
        const usuario = await usuarioRepo.updateAcess(id, acesso);
        if (!usuario) throw new Error('Usuário não encontrado ou acesso não alterado');
        return usuario;
    }
    ,

    async remove(id) {
        return usuarioRepo.delete(id);
    },
};

module.exports = usuarioService;
