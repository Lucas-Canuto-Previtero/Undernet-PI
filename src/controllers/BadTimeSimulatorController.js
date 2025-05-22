var BadTimeSimulatorModel = require("../models/BadTimeSimulatorModel"); // captura  váriaveis do arquivo MODEL

function listar(req, res) {
    var idUsuario = req.body.idUsuario; // req.body.(variavel) = captura as variaveis contidas no frontend para manipulação 
    // aqui, idUsuario = sessionStorage.ID_USUARIO, essa variável está declarada no front.

    BadTimeSimulatorModel.listar(idUsuario).then(function (resultado) {
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
    var tempoBT = req.body.tempoBT;

    BadTimeSimulatorModel.listar(idUsuario).then(function (resultado) {
        if (resultado.length > 0) {
            let tempoAnterior = resultado[0].tempoPermanencia;
            let novoTempo = tempoAnterior + tempoBT;

            BadTimeSimulatorModel.atualizar(idUsuario, novoTempo).then(() => {
                res.status(200).send("Tempo atualizado com sucesso!");
            });
        } else {
            BadTimeSimulatorModel.cadastrar(idUsuario, tempoBT).then(() => {
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
}; // literalmente exporta as FUNÇÕES

// Aqui será meio que a corrente entre o front e o backend. Na hora de listar ele ira acessar o json do resultado do ultimo arquivo Model
// (resultado = resultado da consulta no banco) na posição 0, pois como existe uma programação para select, inserir apenas 1 dado e atualizar
// esse mesmo dado em uma condição específica, a posição desse json na array sempre será 0, pois sempre será cadastrado um dado por usuario,
// qualquer alteração será feita via update.
// É aqui que tenho que
// fazer as verificações de possibilidade de um valor nulo, coletar os dados dos bancos, mexer neles aqui e depois retornar.
