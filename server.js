require('dotenv').config()
const cookieParser = require('cookie-parser');
const jwt = require('jsonwebtoken');
const express = require('express')
const app = express()
const exphbs = require('express-handlebars');
const path = require('path')
const port = 3000
// const mongoose = require('mongoose')
// const Task = require('./api/models/todoListModel') 

const bodyParser = require('body-parser');
const expressValidator = require('express-validator');

app.use(express.static('public'));
app.use(expressValidator());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.engine('handlebars', exphbs({defaultLayout:'main'}));
app.set('view engine', 'handlebars');


// Set db
require('./data/todo-db');

//controllers
require('./controllers/todo.js')(app);
require('./controllers/user')(app);
// app.get("/", (req,res) => {
//   res.render('home')
// })
app.get("/todo/new", (req, res) => {
  res.render("new-todo")
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))


module.exports = app;