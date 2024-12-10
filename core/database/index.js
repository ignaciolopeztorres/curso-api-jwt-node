
const mysql = require('mysql');
const { PASSWORD, HOST_DB, USER_DB, PORT_DB, DATABASE } = require('../config/setup');

const pool = mysql.createPool({
    conectionLimit: 10,
    host:HOST_DB,
    user:USER_DB,
    password: PASSWORD,
    database: DATABASE,
    port:PORT_DB
});

pool.getConnection((err, connection) => {
    if (err) {
        if (err.code === 'PROTOCOL_CONNECTION_LOST') {
            console.error('DATABASE CONNECTION WAS CLOSED');
        }
        if (err.code === 'ER_CON_COUNT_ERROR') {
            console.error('DATABASE HAS TO MANY CONNECTIONS');
        }
        if (err.code === 'ECONNREFUSED') {
            console.error('DATABASE CONNECTION WAS REFUSED');
        }
        if (err.code === 'ER_ACCESS_DENIED_ERROR') {
            console.error('ACCESS DENIED ANY USER');
        }
        console.log('Error:', err);
        return;
    } //enf if error

    if (connection) connection.release();
    console.log('DATABASE IS CONNECTED');
    return;
});

module.exports = pool;
