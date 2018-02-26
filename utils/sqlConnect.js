var mysql = require('mysql'); //this is like doing a require with PHP
var config = require('../config');

var connect = mysql.createConnection({
  host : config.host,
  port : config.port,
  user : config.user,
  password : config.password,
  database : config.database
});

module.exports = connect;
