const { app } = require('./configs/customExpress.js');
const { axios, url } = require('./configs/apiConfig.js');
const { User } = require('./classes/User.js');

let user;

//controllers
app.get((''), (req, res) => {
    res.render('cadastro');
});

app.get(('/cadastro'), (req, res) => {
    res.render('cadastro');
});

app.post('/cadastro', (req, res) => {
    axios({
        url: url + '/cadastro', 
        data: {
        email: req.body.email,
        nome: req.body.name
    }})
        .then((response) => {
            user = new User(response.data.id, req.body.name);
            console.log(user);
            res.redirect('/comentarios');
        })
        .catch(function (error) {
            console.log(error);
        });
});

app.get('/comentarios', (req, res) => {
    axios({
        url: url + '/busca_comentarios'})
        .then((response) => {
            //if(user === undefined){
            //    res.redirect('/cadastro')
            //} else {
                res.render('comentarios', {comments: response.data })
            //}
        })
        .catch(function (error) {
            console.log(error);
        });
});

app.post('/comentarios', (req, res) => {
    axios({
        url: url + '/add_comentario', 
        data: {
        id_usuario: user.id,
        comentario: req.body.comment
    }})
        .then((response) => {
            res.redirect('/comentarios')
        })
        .catch(function (error) {
            console.log(error);
        });
});