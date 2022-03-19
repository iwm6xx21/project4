const express = require('express');
const methodOverride = require('method-override');
const app = express()
const PORT = 2000;
const expressLayouts = require('express-ejs-layouts')
const imageController = require('./controllers/image')



app.use(express.static('public'))

app.use(express.urlencoded({extended:true}));
app.use(express.json())

app.use(methodOverride('_method'))

//express layout setup
app.use(expressLayouts)
// EJS setup
app.set('view engine', 'ejs')






app.use('/', imageController);








// Port setup
app.listen(PORT, () => console.log(`Running on Port ${PORT}`))
