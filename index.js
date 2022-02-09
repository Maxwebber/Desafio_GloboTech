(async() => {

    const db = require("./db");
    console.log('Começamos');

    console.log('INSERT *INTO BANCOPEDIDOS');
    const result = await db.insertCustomers();
    console.log(bancopedidos);

    console.log('SELECT *FROM BANCOPEDIDOS');
    const bancopedidos = await db.selectCustomers();
    console.log(bancopedidos);
})();