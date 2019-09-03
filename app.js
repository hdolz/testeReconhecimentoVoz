const express = require('express');
const exphbs = require('express-handlebars');
const app = express();

//express handlebars middleware
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

app.use(express.static('public'));

/* Requisições */
app.get('/', (req, res) => {
    res.render('index', {
        moduloReconhecimento: 'js/teste.js',
        configJs: 'js/configs.js'
    });
});

/* INDEX */
const port = 5000;
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});