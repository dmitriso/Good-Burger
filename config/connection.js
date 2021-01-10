const mysql = require('mysql');

module.exports = connection.js;

//CONNECTING TO THE DATABASE
const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'Dmso0929',
    database: 'burgers_db',
  });
  //CONFIRMS IF CONNECTION WAS SUCCESSFUL OR NOT
  connection.connect((err) => {
    if (err) throw err;
    console.log('connected as id ' + connection.threadId);
    init();
  });
  