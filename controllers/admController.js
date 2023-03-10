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
        console.log(admin)

    }
}

// Exportar
module.exports = admController;