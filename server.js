if(process.env.NODE_ENV != 'production'){
    require('dotenv').config();
}

const express = require('express');
const app = express();
const expressLayouts = require('express-ejs-layouts');
const bodyParser = require('body-parser');

//routes
const indexRouter = require('./routes/index');
const addRouter = require('./routes/add');


app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.set('layout', 'layouts/layout');

app.use(expressLayouts);
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static('public'));

const mongoose = require('mongoose');
mongoose.connect(process.env.DATABASE_URL, {useNewUrlParser: true});
const db = mongoose.connection;
db.on('error', () => console.error(error));
db.once('open', () => console.log(`Connected to Mongoose`));

app.use('/', indexRouter);
app.use('/add', addRouter);


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on ${PORT} port`);
})