var express = require("express");
var router = express.Router();

var MTTgameshowController = require("../controllers/MTTgameshowController");


router.post("/registrar", MTTgameshowController.Cadastrar);

module.exports = router;