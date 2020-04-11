const express = require('express');
const app = express();

//Settings
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

//middlewares

app.get('/', (req, res) => {
    res.render('index');
})


app.get('/', (req, res) => {
    res.send('Helloworld');
})

//Static Files
app.use(express.static(__dirname + '/public'));


module.exports = app;