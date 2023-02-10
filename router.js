// Importando express
const express = require('express');
const PaginasController = require("./controllers/PaginasController")
const FilmesController = require("./controllers/FilmesController")

// Criando router
const router = express.Router();

// Definindo rotas. Quando temos apenas a barra, acessamos localhost:3000 (porta indicada no app.js)
    router.get("/", PaginasController.index)
    router.get("/filme/create", FilmesController.create)

// Exportando router
module.exports = router;

