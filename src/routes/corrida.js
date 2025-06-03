var express = require("express");
var router = express.Router();

var corridaController = require("../controllers/corridaController");

router.post("/listar", corridaController.listar);
router.post("/registrar", corridaController.registrar);

module.exports = router;
// aqui aparentemente junta o app.js (criador base das rotas) com esse arquivo, onde cria uma linha do app.js até o controller.