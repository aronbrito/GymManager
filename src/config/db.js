const { Pool } = require('pg')

module.exports = new Pool ({
    user: 'postgres',
    password: 'arbr2904',
    host: 'localhost',
    port: 5432,
    database: 'gymmanager'
})