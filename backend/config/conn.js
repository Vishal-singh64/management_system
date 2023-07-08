const {createConnection} =require('mysql');

const conn=createConnection({
    host:process.env.HOST,
    user:process.env.USER,
    password:process.env.PASS,
    database:process.env.MYSQL_DB,
})

module.exports =conn;