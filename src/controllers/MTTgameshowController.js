var MTTgameshowModel = require("../models/MTTgameshowModel");

function Cadastrar(req, res) {
    var acertos = req.body.acertos;
    var erros = req.body.erros;
    var idUsuario = req.body.idUsuario;




    MTTgameshowModel.Cadastrar(acertos, erros, idUsuario).then(() => {
        res.status(200).send("Respostas cadastrado com sucesso!");
    }).catch(function (erro) {
        res.status(500).json(erro.sqlMessage);
    });
}


module.exports = {
    Cadastrar
};