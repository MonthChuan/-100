var express = require('express');
var app = express()
var mysql = require('mysql');
var path = require("path")
var bodyParser = require('body-parser')
var connection = mysql.createConnection({
	host : '127.0.0.1',
	user : 'root',
	password : '123123',
	database : 'icon'
})
connection.connect();
app.use(bodyParser.urlencoded({extended: false}))
app.get('/:iconid', function(req, res) {
	console.log(req.params.iconid)
	var id = req.params.iconid
	if (id) {
		connection.query(`select * from icons where id=${id}`, function(err, value) {
			if (!err) {
				console.log(value)
				res.send(value)
			}
		})
	}
})
app.listen('3000');
