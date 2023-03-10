//Importando o multer
const multer = require('multer');
const upload = multer({dest:'public.img.cartazes'});

// Importando express
const express = require('express');
const PaginasController = require('./controllers/PaginasController');
const FilmesController = require('./controllers/FilmesController');
const admController = require('./controllers/admController');

// Criando router
const router = express.Router();

router.get('/', PaginasController.index);
router.get('/filmes/create', FilmesController.create);
router.get('/filmes/:id', PaginasController.showFilme);
router.get('/busca', PaginasController.buscarFilmes);

// Rota para exibir um formulário de edição de um filme
// get '/adm/filmes/:id/edit' -> PaginasController.editFilme
router.get('/adm/filmes/:id/edit' , PaginasController.editFilme);
router.post('/adm/filmes/:id/update' , PaginasController.updateFilme);

// Armazenando o filme
router.post('/adm/filmes/store', FilmesController.store);

// Login usuário admin
router.get('/adm/login', admController.showLogin);
router.post('/adm/login', admController.login);

// Exportando router
module.exports = router;