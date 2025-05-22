// repository/pedidoRepository.js
class PedidoRepository {
    async create(pedido) {
        const { produto_id, quantidade, valor, status, comanda_id } = pedido;
        return db.one(
            'INSERT INTO pedidos (produto_id, quantidade, valor, status, comanda_id) VALUES ($1, $2, $3, $4, $5) RETURNING *',
            [produto_id, quantidade, valor, status, comanda_id]
        );
    }

    async findAll() {
        return db.any('SELECT * FROM pedidos');
    }

    async findById(id) {
        return db.oneOrNone('SELECT * FROM pedidos WHERE id = $1', [id]);
    }

    async update(id, data) {
        const { produto_id, quantidade, valor, status, comanda_id } = data;
        return db.one(
            'UPDATE pedidos SET produto_id = $1, quantidade = $2, valor = $3, status = $4, comanda_id = $5 WHERE id = $6 RETURNING *',
            [produto_id, quantidade, valor, status, comanda_id, id]
        );
    }

    async delete(id) {
        return db.result('DELETE FROM pedidos WHERE id = $1', [id]);
    }
}

module.exports = new PedidoRepository();
