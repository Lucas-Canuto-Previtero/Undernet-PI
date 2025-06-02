var BadTimeSimulatorModel = require("../models/pianoModel");

function listar(req, res) {
    var idUsuario = req.body.idUsuario;


    pianoModel.listar(idUsuario).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado[0]);
        } else {
            res.status(200).json({ tempoPermanencia: 0 });
        }
    }).catch(function (erro) {
        res.status(500).json(erro.sqlMessage);
    });
}

function atualizarOuCadastrar(req, res) {
    var idUsuario = req.body.idUsuario;
    var tempoPiano = req.body.tempoPiano;

    pianoModel.listar(idUsuario).then(function (resultado) {
        if (resultado.length > 0) {
            let tempoAnterior = resultado[0].tempoPermanencia;
            let novoTempo = tempoAnterior + tempoPiano;

            pianoModel.atualizar(idUsuario, novoTempo).then(() => {
                res.status(200).send("Tempo atualizado com sucesso!");
            });
        } else {
            pianoModel.cadastrar(idUsuario, tempoPiano).then(() => {
                res.status(200).send("Tempo cadastrado com sucesso!");
            });
        }
    }).catch(function (erro) {
        res.status(500).json(erro.sqlMessage);
    });
}

module.exports = {
    listar,
    atualizarOuCadastrar
};