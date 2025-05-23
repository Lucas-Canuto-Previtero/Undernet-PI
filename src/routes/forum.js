var express = require("express");
var router = express.Router();

var forumController = require("../controllers/forumController");

router.get("/listar", function (req, res) {
    forumController.listar(req, res);
});

router.get("/listar/:idUsuario", function (req, res) {
    forumController.listarPorUsuario(req, res);
});

router.get("/pesquisar/:descricao", function (req, res) {
    forumController.pesquisarDescricao(req, res);
});

router.post("/publicar/:idUsuario", function (req, res) {
    console.log("teste")
    forumController.publicar(req, res);
});

router.put("/editar/:idPostagem", function (req, res) {
    forumController.editar(req, res);
});

router.delete("/deletar/:idPostagem", function (req, res) {
    forumController.deletar(req, res);
});

module.exports = router;