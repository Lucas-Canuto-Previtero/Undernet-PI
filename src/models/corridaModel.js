var database = require("../database/config");

function listar() {
    var instrucao = `
       SELECT 
		u.nome as "Nome:",
        c.CPS,
        (SELECT DATE_FORMAT(c.dataHora, '%d/%m/%Y %H:%i:%s')) as "Data e Hora:"
        FROM resultadocorrida c
        inner join usuario u on c.fk_idUsuario = u.idUsuario
        where c.CPS = (
        select max(c2.CPS) from resultadocorrida c2
        where c2.fk_idUsuario = c.fk_idUsuario
        group by u.nome)
        order by c.CPS desc;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function registrar(idUsuario, CPS, tempoPermanencia) {
    var instrucao = `
        INSERT INTO resultadocorrida (fk_idUsuario, CPS, tempoPermanencia)
        VALUES (${idUsuario}, ${CPS}, ${tempoPermanencia});
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function listarCPSgeral() {
    var instrucaoSql = `
          SELECT 
    round(avg(CPS), 2) as CPS
    FROM resultadocorrida;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


module.exports = {
    listar,
    registrar,
    listarCPSgeral
};