async function connect() {
    if (global.connection && global.connection.state !== 'disconected')
        return global.connection;

    const mysq = require("mysql2/promisse");
    const connection = await mysql.createConnection("mysql://root:localhost:3306/bancopedidos")
    console.log("Conectou");
    global.connection = connection;
    return connection;

}
async function selectCustomers() {
    const conn = await connect();
    const [rows] = await conn.query('SELECT *FROM bancopedidos;');
    return rows;

}
module.exports = { selectCustomers }

async function insertCustomer(customer) {
    const conn = await connect();
    const sql = 'INSERT INTO bancopedidos()numero_pedido, nome_produto, data_pedido, previsao_entrega, data_recebido) VALUES( ? , ? , ? );';
    const values = [customer.numero_pedido, customer.nome_produto, customer.data_pedido, customer.previsao_entrega, data_recebido];
    return await conn.query(sql, values);
}