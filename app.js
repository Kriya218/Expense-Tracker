const express = require('express');
const app = express();
const router = require('./routes');

if (process.env.NODE_ENV === 'development') {
  require('dotenv').config()
}

const { engine } = require('express-handlebars');
const methodOverride = require('method-override');
const handlebars = require('handlebars');

const session = require('express-session');
const flash = require('connect-flash');
const messageHandler = require('./middlewares/message-handler')

const port = 3000;

handlebars.registerHelper('eq', (arg1, arg2) => {
  return arg1 === arg2
})

app.engine('.hbs', engine({extname: '.hbs'}));
app.set('view engine', '.hbs');
app.set('views', './views')

app.use(express.static('public'));
app.use(express.urlencoded({extended: true}));
app.use(methodOverride('_method'));

app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false
}))

app.use(flash());
app.use(messageHandler);
app.use(router);

app.listen(port, () => {
  console.log(`Server running on: http://localhost:${port}`)
})

