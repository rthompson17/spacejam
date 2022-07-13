// This is where we'll import our model to perform db logic
const Todo = require('../models/todo');
// model by convention is always singular and capitalized (Not just JS, like every language)

module.exports = {
	index,
	show,
	new: newTodo,
	create,
	delete: deleteTodo
	// shorthand for 
	// index: index
}

function deleteTodo(req, res){
	console.log(req.params.id, ' < - this id the id of the todo we are deleting');
	Todo.deleteOne(req.params.id)
	// Where do we want the client to go after they delete something?
	res.redirect('/todos')
}

function create(req, res){
	console.log(req.body, ' <- req.body, contents of the form')
	// respond with a redirect

	// Logic adding to the database using the model
	Todo.create(req.body)

	res.redirect('/todos'); // takes an url endpoint <- referring to a route
}


function index(req, res){

	res.render('todos/index', {
		todos: Todo.getAll()
	})
}

function show(req, res){
	console.log(req.params,  " < - req.params in show function")
	res.render('todos/show', {
		todoNum: req.params.id,
		todo: Todo.getOne(req.params.id)
	})
}


function newTodo(req, res){
	res.render('todos/new')
} 