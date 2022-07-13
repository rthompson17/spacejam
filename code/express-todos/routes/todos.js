var express = require('express');
const { route } = require('express/lib/application');
var router = express.Router();
const todoController = require('../controllers/todos')

router.get('/', todoController.index); 

router.get('/new', todoController.new);


router.get('/:id', todoController.show);
//.index is the function we exported from the controllers/todos

router.post('/', todoController.create);

router.delete('/:id', todoController.delete);

// /* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

module.exports = router;
