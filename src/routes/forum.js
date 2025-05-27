var express = require("express");
var router = express.Router();

var forumController = require("../controllers/forumController");

router.get("/listar", function (req, res) {
    forumController.listar(req, res);
});

router.get("/listarPorTipo/:tipoFiltro", function (req, res) {
    forumController.listarPorTipo(req, res);
});

router.post("/publicar/:idUsuario", function (req, res) {
    console.log("teste")
    forumController.publicar(req, res);
});

router.put("/editarTexto/:idPostagem", function (req, res) {
    forumController.editarTexto(req, res);
});

router.put("/editarImagem/:idPostagem", function (req, res) {
    forumController.editarImagem(req, res);
});

router.delete("/deletar/:idPostagem", function (req, res) {
    forumController.deletar(req, res);
});

module.exports = router;