var corridaModel = require("../models/corridaModel"); // captura  váriaveis do arquivo MODEL

function listar(req, res) {
    corridaModel.listar().then(function (resultado) {
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

function registrar(req, res) {
    var idUsuario = req.body.idUsuario;
    var tempoCorrida = req.body.tempoCorrida;
    var CPS = req.body.CPS;

    corridaModel.registrar(idUsuario, CPS, tempoCorrida).then(() => {
        res.status(200).send("Resultado cadastrado com sucesso!");
    }).catch(function (erro) {
        res.status(500).json(erro.sqlMessage);
    });
}

module.exports = {
    listar,
    registrar
}; // literalmente exporta as FUNÇÕES

// Aqui será meio que a corrente entre o front e o backend. Na hora de listar ele ira acessar o json do resultado do ultimo arquivo Model
// (resultado = resultado da consulta no banco) na posição 0, pois como existe uma programação para select, inserir apenas 1 dado e atualizar
// esse mesmo dado em uma condição específica, a posição desse json na array sempre será 0, pois sempre será cadastrado um dado por usuario,
// qualquer alteração será feita via update.
// É aqui que tenho que
// fazer as verificações de possibilidade de um valor nulo, coletar os dados dos bancos, mexer neles aqui e depois retornar.
