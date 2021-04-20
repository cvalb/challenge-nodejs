const express = require('express');

const app = express();
const port = 3000;

app.listen(port, () => console.info('Servidor rodando na porta ' + port));

app.use(express.static('public'));
app.use('/css', express.static(__dirname + 'public/'));
app.use('/js', express.static(__dirname + 'public/'));
app.use(express.urlencoded({ extended: false }));

app.set('views', './pages');
app.set('view engine', 'ejs');

module.exports = { app: app };