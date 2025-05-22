// repository/produtoRepository.js
class ProdutoRepository {
    async create(produto) {
        const { nome, descricao, preco, imagem_url, cardapio_id } = produto;
        return db.one(
            'INSERT INTO produtos (nome, descricao, preco, imagem_url, cardapio_id) VALUES ($1, $2, $3, $4, $5) RETURNING *',
            [nome, descricao, preco, imagem_url, cardapio_id]
        );
    }

    async findAll() {
        return db.any('SELECT * FROM produtos');
    }

    async findById(id) {
        return db.oneOrNone('SELECT * FROM produtos WHERE id = $1', [id]);
    }

    async update(id, data) {
        const { nome, descricao, preco, imagem_url, cardapio_id } = data;
        return db.one(
            'UPDATE produtos SET nome = $1, descricao = $2, preco = $3, imagem_url = $4, cardapio_id = $5 WHERE id = $6 RETURNING *',
            [nome, descricao, preco, imagem_url, cardapio_id, id]
        );
    }

    async delete(id) {
        return db.result('DELETE FROM produtos WHERE id = $1', [id]);
    }
}

module.exports = new ProdutoRepository();
