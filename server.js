const express = require('express')
const app = express()

const hbs = require('hbs');

require('./hbs/helpers');

const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));
//Express HBS
hbs.registerPartials(__dirname + '/views/parciales');
app.set('view engine', 'hbs');


app.get('/', (req, res) => {
    // let salida = {
    //     nombre: 'Andres',
    //     edad: 24,
    //     url: req.url
    // }
    // res.send(salida);
    res.render('home', {
        nombre: 'Home'
    });
});

app.get('/about', (req, res) => {
    res.render('about');
});



// app.get('/data', (req, res) => {
//     res.send('Hola Data');
// });


app.listen(port, () => { console.log(`escuchando peticiones en el puerto ${port}`) })