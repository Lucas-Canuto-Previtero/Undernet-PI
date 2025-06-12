var express = require("express");
var router = express.Router();

var corridaController = require("../controllers/corridaController");

router.get("/listar", corridaController.listar);

router.post("/registrar", corridaController.registrar);

router.get("/listarCPSgeral", function (req, res) {
    corridaController.listarCPSgeral(req, res);
});

module.exports = router;
// aqui aparentemente junta o app.js (criador base das rotas) com esse arquivo, onde cria uma linha do app.js até o controller.