var express = require("express");
var router = express.Router();

var BadTimeSimulatorController = require("../controllers/BadTimeSimulatorController");

router.post("/listar", BadTimeSimulatorController.listar);
router.post("/registrar", BadTimeSimulatorController.atualizarOuCadastrar);

module.exports = router;
// aqui aparentemente junta o app.js (criador base das rotas) com esse arquivo, onde cria uma linha do app.js até o controller.