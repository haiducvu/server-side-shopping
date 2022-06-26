const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'itemList',
    password: 'Dekgcsvn@123'  
});

module.exports = pool.promise();