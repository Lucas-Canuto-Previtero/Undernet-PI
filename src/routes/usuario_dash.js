var express = require("express");
var router = express.Router();

var usuario_dashController = require("../controllers/usuario_dashController");



router.get("/listarQuiz1/:idUsuario", function (req, res) {
    usuario_dashController.listarQuiz1(req, res);
});

router.get("/listarQuiz2/:idUsuario", function (req, res) {
    usuario_dashController.listarQuiz2(req, res);
});

router.get("/listarQuiz3/:idUsuario", function (req, res) {
    usuario_dashController.listarQuiz3(req, res);
});

router.get("/listarPersona/:idUsuario", function (req, res) {
    usuario_dashController.listarPersona(req, res);
});

router.get("/listarMinigame/:idUsuario", function (req, res) {
    usuario_dashController.listarMinigame(req, res);
});

router.get("/listarQuizGeral/", function (req, res) {
    usuario_dashController.listarQuizGeral(req, res);
});

router.get("/listarPersonaGeral", function (req, res) {
    usuario_dashController.listarPersonaGeral(req, res);
});

router.get("/listarMinigameGeral", function (req, res) {
    usuario_dashController.listarMinigameGeral(req, res);
});





module.exports = router;