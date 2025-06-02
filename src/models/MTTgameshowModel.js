var database = require("../database/config");


function Cadastrar(acertos, erros, idUsuario) {
    var instrucao = `
        INSERT INTO resultadoQuiz (acertos, erros, fk_idUsuario)
        VALUES (${acertos}, ${erros}, ${idUsuario});
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}


module.exports = {
    Cadastrar
};