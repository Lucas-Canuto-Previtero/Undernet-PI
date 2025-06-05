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



function listarMinigame(idUsuario) {
    console.log("ACESSEI O FORUM  MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
    var instrucaoSql = `
          SELECT round((rb.tempoPermanencia / 60), 1) AS tempo_permanencia
    FROM resultadoBadTime rb
    INNER JOIN usuario u ON u.idUsuario = rb.fk_idUsuario
    WHERE rb.fk_idUsuario = ${idUsuario}
    
    UNION 
    
    SELECT round((rp.tempoPermanencia / 60), 1) AS tempo_permanencia1
    FROM resultadoPiano rp
    INNER JOIN usuario u ON u.idUsuario = rp.fk_idUsuario
    WHERE rp.fk_idUsuario = ${idUsuario}
    
    UNION 
    
    SELECT round((COUNT(rc.tempoPermanencia) / 60), 1) AS tempo_permanencia2
    FROM resultadoCorrida rc 
    INNER JOIN usuario u ON u.idUsuario = rc.fk_idUsuario
    WHERE rc.fk_idUsuario = ${idUsuario};
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}



function listarCPS(idUsuario) {
    console.log("ACESSEI O FORUM  MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
    var instrucaoSql = `
         SELECT 
    (SELECT DATE_FORMAT(rc.dataHora, '%d/%m/%Y %H:%i:%s'))  as dataHora_Formatada,
    rc.CPS
    FROM resultadoCorrida rc
    INNER JOIN usuario u ON u.idUsuario = rc.fk_idUsuario
    WHERE rc.fk_idUsuario = ${idUsuario}
    ORDER BY dataHora_Formatada;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}




module.exports = {
    listarQuiz1,
    listarQuiz2,
    listarQuiz3,
    listarPersona,
    listarMinigame,
    listarCPS

}
