var mysql = require('mysql');
var connection = mysql.createConnection({
	host : 'localhost:3306',
	user : 'root',
	database : 'icon'
})
connection.connect();
//var Sequelize = require('sequelize');
//
//var connection = new Sequelize('icon', 'root', '123456', {
//host: 'localhost',
//dialect: 'mysql'
//});
//
//module.exports = connection;