const express = require('express');
const methodOverride = require('method-override');
const app = express()
const PORT = 2000;
const imageController = require('./controllers/image')


app.use(methodOverride('_method'))


app.use(express.urlencoded({extended:false}));
app.use(express.json())

app.use('/', imageController);


// EJS setup

app.set('view engine', 'ejs')



// Port setup
app.listen(PORT, () => console.log(`Running on Port ${PORT}`))
