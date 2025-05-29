var express = require("express");
var router = express.Router();

var quizPersonalidadeController = require("../controllers/quizPersonalidadeController");;

router.get(`/listar/:idUsuario`, quizPersonalidadeController.listar);
router.post("/registrar", quizPersonalidadeController.Cadastrar);

module.exports = router;