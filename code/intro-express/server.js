// load the express module
const express = require('express');
const path = require('path');
const todoDb = require('./data/todo-db');
// create our express app
const app = express();

// how to configure view engine
app.set('view engine', 'ejs')
// this is the folder where our views can be found, 
// the default is the views
app.set('views', path.join(__dirname, 'views'));
// app object will allow us to define routes
// define the root route - localhost:3000
app.get('/', function(req, res){ // app.get listens for a GET http request
	res.redirect('/todos')
})


// if we want to make a request from the client (browser)
// localhost:3000/home
app.get('/home', function(req, res){
	// we use render when we want to compile an ejs template and send it to the client

	res.render('home')
})

app.get('/todos', function(req, res){
	res.render('todos/index', { // 'todos/index' where to look up the ejs file
		greeting: 'hello, ',
		todos: todoDb.getAll() // the key is a variable in the template
		// todos a variable inside of todos/index.ejs file

		// todoDb.getAll() evaluates to an array of objects
	})
})


// and setup the server to listen for requests from a client
app.listen(3000, function(){
	console.log('The Express App is listening on port 3000')
})