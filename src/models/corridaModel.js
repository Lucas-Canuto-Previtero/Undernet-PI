var database = require("../database/config");

function listar() {
    var instrucao = `
        SELECT 
        u.nome as "Nome:",
        c.CPS,
        (SELECT DATE_FORMAT(c.dataHora, '%d/%m/%Y %H:%i:%s')) as "Data e Hora:"
        FROM resultadoCorrida c
        inner join usuario u on c.fk_idUsuario = u.idUsuario
        order by c.idResultadoCorrida;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function registrar(idUsuario, CPS, tempoPermanencia) {
    var instrucao = `
        INSERT INTO resultadoCorrida (fk_idUsuario, CPS, tempoPermanencia)
        VALUES (${idUsuario}, ${CPS}, ${tempoPermanencia});
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}


module.exports = {
    listar,
    registrar
};