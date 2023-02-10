// ESTRUTURA BÁSICA
// Criando um controller com uma variável/constante para armazenar um objeto

const PaginasController = {
    index: (req, res) => {
        res.render("index.ejs")
    }
}

//index, aqui, é uma "etiqueta". Outros exemplos de padrão:
// show: para mostrar detalhes de produtos
// edit: para atualizar algo
// delete: para deletar algo
// create: para criar um produto - por quem tem acesso administrativo. Normalmente é a página de cadastro que faz algo.

// Exportar um objeto

module.exports = PaginasController