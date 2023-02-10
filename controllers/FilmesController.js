const FilmesController = {

//create, aqui, é uma "etiqueta" - assim como "index" está em PaginasController.js

    create: (req,res)=> {
        res.render("filme-create.ejs")
    }
}

module.exports = FilmesController