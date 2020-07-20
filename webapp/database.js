var mysql = require('mysql');
var conn = mysql.createConnection({
  host: 'mysql',
  user: 'root',
  password: 'password',
  database: 'kabum_webform',
  port: 3306
}); 
//conn.connect(function(err) {
//if (err) throw err;
//  console.log('Database is connected successfully !');
//});
module.exports = conn;