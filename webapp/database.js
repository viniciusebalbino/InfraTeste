var mysql = require('mysql');
//String de conexão do sistema web com o MySQL
var conn = mysql.createConnection({
  host: 'mysql',
  user: 'root',
  password: 'password',
  database: 'kabum_webform',
  port: 3306
}); 
module.exports = conn;