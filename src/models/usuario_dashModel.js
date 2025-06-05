var database = require("../database/config");

function listarQuiz1(idUsuario) {
    console.log("ACESSEI O FORUM  MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
    var instrucaoSql = `
         SELECT 
            rq.acertos,
            rq.erros
        FROM resultadoQuiz rq
            INNER JOIN usuario u
                ON rq.fk_idUsuario = u.idUsuario 
                where rq.dataHora = (select min(dataHora) from resultadoQuiz where fk_idUsuario = ${idUsuario}) 
                and rq.fk_idUsuario = ${idUsuario};
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


function listarQuiz2(idUsuario) {
    console.log("ACESSEI O FORUM  MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
    var instrucaoSql = `
        SELECT 
            rq.acertos,
            rq.erros
        FROM resultadoQuiz rq
            INNER JOIN usuario u
                ON rq.fk_idUsuario = u.idUsuario 
                where rq.dataHora = (select max(dataHora) from resultadoQuiz where fk_idUsuario = ${idUsuario}) 
                and rq.fk_idUsuario = ${idUsuario};
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


function listarQuiz3(idUsuario) {
    console.log("ACESSEI O FORUM  MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
    var instrucaoSql = `
         SELECT 
            rq.acertos,
            rq.erros
        FROM resultadoQuiz rq
            INNER JOIN usuario u
                ON rq.fk_idUsuario = u.idUsuario 
                where rq.acertos = (select max(acertos) from resultadoQuiz where fk_idUsuario = ${idUsuario}) 
                and rq.fk_idUsuario = ${idUsuario};
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}




function listarPersona(idUsuario) {
    console.log("ACESSEI O FORUM  MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
    var instrucaoSql = `
          SELECT 
     chanceToriel,
	 chanceSans,
	 chancePapyrus,
	 chanceNapstablook,
	 chanceUndyne,
	 chanceFlowey,
	 chanceFrisk,
	 chanceChara,
	 chanceMettaton,
	 chanceAsgore,
	 chanceAsriel
        FROM resultadoPersona rp
            INNER JOIN usuario u
                ON rp.fk_idUsuario = u.idUsuario 
                where rp.fk_idUsuario = ${idUsuario};
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}





module.exports = {
    listarQuiz1,
    listarQuiz2,
    listarQuiz3,
    listarPersona

}
