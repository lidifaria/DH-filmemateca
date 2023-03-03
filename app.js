// Importando express
const express = require('express');

// Importando e configurando router
const router = require('./router');

// Criando app
const app = express();

// Configurando pasta de arquivos estáticos acessíveis
app.use(express.static('public'));

// Configurando ejs como template engine
app.set('view engine', 'ejs')

// Para acessar as informações que recebermos via form "req.body"
app.use(express.urlencoded({extended:false}));
app.use(router);

// Pondo app para ouvir em porta
app.listen(3000);
