const mysql=require('mysql');

const pool=mysql-createPool({
    host: 'localhoost',
    user: 'root',
    database: 'suman',
    password: 'Sumo#7272'
})

module.exports = pool.promise();