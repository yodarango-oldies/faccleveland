// server 
const express  = require('express')
const app = express();

// handle form and json data
app.use(express.urlencoded({ extended: false}))
app.use(express.json());


// public folder and views
app.set('views', `${__dirname}/views`);
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));

// routes
const public = require('./src/routes/public-main');
app.use('/', public);



app.listen(8080 || process.env.PORT);