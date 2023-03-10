const admController = {
    showLogin: (req, res) => {
        res.render('login.ejs');
    },

    //Receber informações via req body
    // E-mail e senha que recebo existe no meu arquivo de adm? Se sim, auth. Se não, informar mensagem de erro.
    login: (req, res) => {
        const { email, senha } = req.body;
        const usersAdmin = require('../database/usersAdmin.json');

        let admin = usersAdmin.find(admin => admin.email == email)

        if (admin == undefined) {
            res.send("E-mail não cadastrado")

        }

        // Autenticando a senha

        if (admin.senha == senha) {
            // res.send("Senhas conferem")
            req.session.admin = admin.nome
            console.log(req.session.admin)

            res.redirect('/adm/filmes/create')
        }

        // Criar uma sessão 
        // Instalar pacote express-session
        // Realizar configurações no app.js
    }
}

// Exportar
module.exports = admController;