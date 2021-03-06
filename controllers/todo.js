const Todo = require('../models/todo');

module.exports = app => {

  app.get('/todo/new', (req, res) => {
    res.render('new-todo');
  })

  // CREATE
  app.post("/todo/new", (req, res) => {
    const todo = new Todo(req.body);
    todo.save((err, todo) => {
        return res.redirect(`/`);
    })
  });

  app.get("/", (req, res) => {
      const currentUser = req.user;
      Todo.find({})
      .then(todo => {
          res.render("todo-index", {todo, currentUser });
      })
      .catch(err => {
          console.log('error', err.message);
      });
  });

  app.get("/todo/:id", function(req, res) {
      // LOOK UP THE Todo
    const currentUser = req.user;
    Todo.findById(req.params.id)
      .then(todo => {
        res.render("todo-show", { todo, currentUser });
      })
      .catch(err => {
        console.log(err.message);
      });
  });
};