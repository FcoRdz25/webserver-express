
const express = require('express');
const app = express();

const hbs = require('hbs');
require('./hbs/helpers');

const port = process.env.PORT || 3000;

 
// Todo sera publico
app.use( express.static( __dirname + '/public' ) );


// express HBS engine
hbs.registerPartials( __dirname + '/views/parciales' );
app.set('view engine', 'hbs');

app.get('/', (req, res) => {
    res.render( 'home.hbs', {
        nombre: 'francisco rodriguez'
    });
});

app.get('/about', (req, res) => {
    res.render( 'about.hbs');
});

 
app.listen( port , () => {
    console.log(`Escuchando peticiones en el puerto ${ port }`);
});

