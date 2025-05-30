var forumModel = require("../models/forumModel");

function listar(req, res) {
    forumModel.listar().then(function (resultado) {
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

function listarPorTipo(req, res) {
    var tipoFiltro = req.params.tipoFiltro;

    forumModel.listarPorTipo(tipoFiltro)
        .then(
            function (resultado) {
                if (resultado.length > 0) {
                    res.status(200).json(resultado);
                } else {
                    res.status(204).send("Nenhum resultado encontrado!");
                }
            }
        )
        .catch(
            function (erro) {
                console.log(erro);
                console.log(
                    "Houve um erro ao buscar os postagens: ",
                    erro.sqlMessage
                );
                res.status(500).json(erro.sqlMessage);
            }
        );
}


function publicar(req, res) {
    var idUsuario = req.params.idUsuario;
    var descricao = req.body.descricao;
    var img = req.body.imagem;
    var tipo = req.body.tipo;

    if (tipo == undefined) {
        res.status(400).send("O tipo está indefinido!");
    } else if (descricao == undefined) {
        res.status(400).send("A descrição está indefinido!");
    } else if (idUsuario == undefined) {
        res.status(403).send("O id do usuário está indefinido!");
    } else if (img == undefined) {
        res.status(403).send("A imagem esta indefinida!")
    } else {
        forumModel.publicar(idUsuario, descricao, tipo, img)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            )
            .catch(
                function (erro) {
                    console.log(erro);
                    console.log("Houve um erro ao realizar o post: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

function editarTexto(req, res) {
    var novaDescricao = req.body.descricao;
    var idPostagem = req.params.idPostagem;

    forumModel.editarTexto(novaDescricao, idPostagem)
        .then(
            function (resultado) {
                res.json(resultado);
            }
        )
        .catch(
            function (erro) {
                console.log(erro);
                console.log("Houve um erro ao realizar o post: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
}

function editarImagem(req, res) {
    var novaImagem = req.body.imagem;
    var idPostagem = req.params.idPostagem;

    forumModel.editarImagem(novaImagem, idPostagem)
        .then(
            function (resultado) {
                res.json(resultado);
            }
        )
        .catch(
            function (erro) {
                console.log(erro);
                console.log("Houve um erro ao realizar o post: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
}

function deletar(req, res) {
    var idPostagem = req.params.idPostagem;

    forumModel.deletar(idPostagem)
        .then(
            function (resultado) {
                res.json(resultado);
            }
        )
        .catch(
            function (erro) {
                console.log(erro);
                console.log("Houve um erro ao deletar o post: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
}

module.exports = {
    listar,
    listarPorTipo,
    publicar,
    editarTexto,
    editarImagem,
    deletar
}