var express = require('express');
var app = express()
var mysql = require('mysql');
var connection = mysql.createConnection({
	host : 'localhost',
	user : 'root',
	passworld : '123456',
	database : '朗朗'
})
connection.connect();
app.get('/', function(req, res) {
	console.log(req)
	res.render('hello world')
})
app.listen('3000');
