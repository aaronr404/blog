var path = require('path');
var dbPath = path.resolve(__dirname, 'blog_db.db');

var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database(dbPath);

db.serialize(function () {
	db.run("CREATE TABLE IF NOT EXISTS blog (blog_id INTEGER PRIMARY KEY, blog_title TEXT, blog_content TEXT)");
	db.run("INSERT INTO blog (blog_title, blog_content) VALUES (?, ?)", "1st blog", "1st blog content");	
});


var express = require('express');
var counterapp = express();

const bodyParser = require('body-parser')

counterapp.use(bodyParser.json())
counterapp.use(bodyParser.urlencoded({ extended: true }))

counterapp.get('/data', function(req, res) {
	db.get("SELECT blog_title, blog_content FROM blog ORDER BY blog_id DESC", function(err, row) {
		res.json({ "blog" : row.blog_title});
	});
});

counterapp.post('/data', function(req, res) {
	console.log(req.body)
	db.run("INSERT INTO blog (blog_title, blog_content) VALUES (?, ?)", "another blog", "blog content", function(err, row) {
		if (err) {
			console.err(err);
			res.status(500);
		}
		else {
			res.status(202);
		}
		res.end();
	});
});

counterapp.listen(5000);