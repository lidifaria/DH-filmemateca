const FilmesController = {
    create: (req, res) => {
        res.render('filme-create.ejs');
    },

    store: (req,res) => {

    const novoFilme = {
        titulo: req.body.titulo, 
        genero: req.body.genero,
        censura: req.body.censura,
        sinopse: req.body.sinopse,
        trailer: req.body.trailer,
        cartaz: req.file.filename,
    }
        res.redirect('index.ejs');
    }

}

module.exports = FilmesController;

// atualizado em 2023.03.10