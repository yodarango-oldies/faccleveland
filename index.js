// server 
const express  = require('express')
const app = express();

// handle form and json data
app.use(express.urlencoded({ extended: false}))
app.use(express.json());


// public folder and views
//app.set('views', `${__dirname}/views`);
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));

// routes
app.use('', require('./src/routes/public-main'));



app.listen(process.env.PORT || 8080);