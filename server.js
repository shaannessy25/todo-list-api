const express = require('express')
const app = express()
const exphbs = require('express-handlebars');
const path = require('path')
const port = 3000
// const mongoose = require('mongoose')
// const Task = require('./api/models/todoListModel') 

const bodyParser = require('body-parser');
const expressValidator = require('express-validator');


// mongoose instance connection url connection
// mongoose.Promise = global.Promise;
// mongoose.connect('mongodb://localhost/Tododb'); 
app.use(express.static('public'));

app.engine('handlebars', exphbs({defaultLayout:'main'}));
app.set('view engine', 'handlebars');
app.use(express.static('public'));
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());


// app.use(function(req, res) {
//   res.status(404).send({url: req.originalUrl + ' not found'})
// });

// var routes = require('./api/routes/todoListRoutes'); //importing route
// routes(app); //register the route

app.get("/", (req, res) => {
  res.render("homepage")
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))


