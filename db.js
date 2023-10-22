const Pool = require('pg').Pool;

const pool = new Pool({
    user:"postgres",
    host: "localhost",
    database: "NewDB",
    password: "0303",
    port: 5432,
});

module.exports = pool;