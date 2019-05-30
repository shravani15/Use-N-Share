const mysql = require('mysql');
const keys = require('./keys');

const db = mysql.createConnection({
    host: keys.db.Server,
    user: keys.db.Username,
    password: keys.db.Password,
    database: keys.db.Database,
    port: keys.db.Port
})

module.exports = db;