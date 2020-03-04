require('dotenv').config()
const cookieParser = require('cookie-parser');
const jwt = require('jsonwebtoken');
const express = require('express')
const app = express()
const exphbs = require('express-handlebars');
const path = require('path')
const port = process.env.PORT
const mongoose = require('mongoose')
const mongo_uri = process.env.MONGODB_URI
mongoose.connect('mongo_uri')

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
  const currentUser = req.user._id;
  res.render("new-todo", { currentUser })
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))


module.exports = app;