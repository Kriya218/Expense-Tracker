const express = require('express');
const app = express();
const router = require('./routes');

const { engine } = require('express-handlebars');
const methodOverride = require('method-override');

const port = 3000;

app.engine('.hbs', engine({extname: '.hbs'}));
app.set('view engine', '.hbs');
app.set('views', './views')

app.use(express.static('public'));
app.use(express.urlencoded({extended: true}));
app.use(methodOverride('_method'));

app.use(router);


app.listen(port, () => {
  console.log(`Server running on: http://localhost:${port}`)
})

