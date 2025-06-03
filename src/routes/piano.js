var express = require("express");
var router = express.Router();

var pianoController = require("../controllers/pianoController");

router.post("/listar", pianoController.listar);
router.post("/registrar", pianoController.atualizarOuCadastrar);

module.exports = router;
