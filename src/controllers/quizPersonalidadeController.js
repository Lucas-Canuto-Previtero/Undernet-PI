var quizPersonalidadeModel = require("../models/quizPersonalidadeModel");

function listar(req, res) {
    var idUsuario = req.params.idUsuario;

    quizPersonalidadeModel.listar(`${idUsuario}`).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar o registro:", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function Cadastrar(req, res) {
    var chanceToriel = req.body.chanceToriel;
    var chanceSans = req.body.chanceSans;
    var chancePapyrus = req.body.chancePapyrus;
    var chanceNapstablook = req.body.chanceNapstablook;
    var chanceUndyne = req.body.chanceUndyne;
    var chanceFlowey = req.body.chanceFlowey;
    var chanceFrisk = req.body.chanceFrisk;
    var chanceChara = req.body.chanceChara;
    var chanceMettaton = req.body.chanceMettaton;
    var chanceAsgore = req.body.chanceAsgore;
    var chanceAsriel = req.body.chanceAsriel;
    var idUsuario = req.body.idUsuario;


    quizPersonalidadeModel.listar(idUsuario).then(function (resultado) {
        if (resultado.length > 0) {
            alert("Você já respondeu o quiz. Não é possível refaze-lo!").then(() => {
                res.status(200).send("Você já respondeu o quiz. Não é possível refaze-lo!");
                return;
            });
        } else {
            quizPersonalidadeModel.cadastrar(chanceToriel, chanceSans, chancePapyrus, chanceNapstablook, chanceUndyne, chanceFlowey, chanceFrisk, chanceChara, chanceMettaton, chanceAsgore, chanceAsriel, idUsuario).then(() => {
                res.status(200).send("Respostas cadastrado com sucesso!");
            });
        }
    }).catch(function (erro) {
        res.status(500).json(erro.sqlMessage);
    });
}

module.exports = {
    listar,
    Cadastrar
};