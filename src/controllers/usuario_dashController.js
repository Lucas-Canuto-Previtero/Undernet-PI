var usuario_dashModel = require("../models/usuario_dashModel");

function listarQuiz1(req, res) {

    var idUsuario = req.params.idUsuario;

    usuario_dashModel.listarQuiz1(idUsuario).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as postagens: ", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}



function listarQuiz2(req, res) {

    var idUsuario = req.params.idUsuario;


    usuario_dashModel.listarQuiz2(idUsuario).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as postagens: ", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}




function listarQuiz3(req, res) {

    var idUsuario = req.params.idUsuario;


    usuario_dashModel.listarQuiz3(idUsuario).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as postagens: ", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}




function listarPersona(req, res) {

    var idUsuario = req.params.idUsuario;


    usuario_dashModel.listarPersona(idUsuario).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as postagens: ", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}




function listarMinigame(req, res) {

    var idUsuario = req.params.idUsuario;


    usuario_dashModel.listarMinigame(idUsuario).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as postagens: ", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}





function listarCPS(req, res) {

    var idUsuario = req.params.idUsuario;


    usuario_dashModel.listarCPS(idUsuario).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as postagens: ", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}














module.exports = {
    listarQuiz1,
    listarQuiz2,
    listarQuiz3,
    listarPersona,
    listarMinigame,
    listarCPS
}