const mysql2 = require('mysql2/promise');

const pool = mysql2.createPool({
    host: 'bidq0070xjyfadb26vsf-mysql.services.clever-cloud.com',
    user: 'uucennsdal1qo439',
    password: 'sLXlwtR4KoyD0Rp4X10n',
    database: 'bidq0070xjyfadb26vsf',
    port: 3306,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
    enableKeepAlive: true,
    keepAliveInitialDelay: 0,
    dateStrings: true,
    // Si Clever Cloud requiere SSL:
    ssl: { rejectUnauthorized: false }
});

pool.on('error', (err) => {
    console.error('[MySQL pool error]', err);
});

/* module.exports = pool.promise(); */
module.exports = pool;