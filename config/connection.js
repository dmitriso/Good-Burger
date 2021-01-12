const mysql = require('mysql');
var connection;

// CONNECTING TO JAWS DB THROUGH HEROKU
if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    host: 'hwr4wkxs079mtb19.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
    user: 'xh41upqabqxjra72',
    password: 'pfgh1uih4nx6x78c',
    database: 'nj53r829xwhvarg0'
  })
}

connection.connect();

// MODULE EXPORT
module.exports = connection;



