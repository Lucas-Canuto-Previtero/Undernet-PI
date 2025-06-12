var database = require("../database/config");

function listarQuiz1(idUsuario) {
    console.log("ACESSEI O FORUM  MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listarQuiz1()");
    var instrucaoSql = `
         SELECT 
            rq.acertos,
            rq.erros
        FROM resultadoquiz rq
            INNER JOIN usuario u
                ON rq.fk_idUsuario = u.idUsuario 
                where rq.dataHora = (select min(dataHora) from resultadoquiz where fk_idUsuario = ${idUsuario}) 
                and rq.fk_idUsuario = ${idUsuario};
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


function listarQuiz2(idUsuario) {
    console.log("ACESSEI O FORUM  MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listarQuiz2()");
    var instrucaoSql = `
        SELECT 
            rq.acertos,
            rq.erros
        FROM resultadoquiz rq
            INNER JOIN usuario u
                ON rq.fk_idUsuario = u.idUsuario 
                where rq.dataHora = (select max(dataHora) from resultadoquiz where fk_idUsuario = ${idUsuario}) 
                and rq.fk_idUsuario = ${idUsuario};
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


function listarQuiz3(idUsuario) {
    console.log("ACESSEI O FORUM  MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listarQuiz3()");
    var instrucaoSql = `
         SELECT 
            rq.acertos,
            rq.erros
        FROM resultadoquiz rq
            INNER JOIN usuario u
                ON rq.fk_idUsuario = u.idUsuario 
                where rq.acertos = (select max(acertos) from resultadoquiz where fk_idUsuario = ${idUsuario}) 
                and rq.fk_idUsuario = ${idUsuario};
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}




function listarPersona(idUsuario) {
    console.log("ACESSEI O FORUM  MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listarPersona()");
    var instrucaoSql = `
          SELECT 
     rp.chanceToriel,
	 rp.chanceSans,
	 rp.chancePapyrus,
	 rp.chanceNapstablook,
	 rp.chanceUndyne,
	 rp.chanceFlowey,
	 rp.chanceFrisk,
	 rp.chanceChara,
	 rp.chanceMettaton,
	 rp.chanceAsgore,
	 rp.chanceAsriel
        FROM resultadopersona rp
            INNER JOIN usuario u
                ON rp.fk_idUsuario = u.idUsuario 
                where rp.fk_idUsuario = ${idUsuario};
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}



function listarMinigame(idUsuario) {
    console.log("ACESSEI O FORUM  MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listarMinigame()");
    var instrucaoSql = `
          SELECT round((sum(rb.tempoPermanencia) / 60), 1) AS tempo_permanencia
    FROM resultadobadtime rb
    INNER JOIN usuario u ON u.idUsuario = rb.fk_idUsuario
    WHERE rb.fk_idUsuario = ${idUsuario}
    
    UNION ALL
    
    SELECT round((sum(rp.tempoPermanencia) / 60), 1) AS tempo_permanencia
    FROM resultadopiano rp
    INNER JOIN usuario u ON u.idUsuario = rp.fk_idUsuario
    WHERE rp.fk_idUsuario = ${idUsuario}
    
    UNION ALL
    
    SELECT round((sum(rc.tempoPermanencia) / 60), 1) AS tempo_permanencia
    FROM resultadocorrida rc 
    INNER JOIN usuario u ON u.idUsuario = rc.fk_idUsuario
    WHERE rc.fk_idUsuario = ${idUsuario};
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}



function listarCPS(idUsuario) {
    console.log("ACESSEI O FORUM  MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listarCPS()");
    var instrucaoSql = `
         SELECT 
    (SELECT DATE_FORMAT(rc.dataHora, '%d/%m/%Y %H:%i:%s'))  as dataHora_Formatada,
    rc.CPS
    FROM resultadocorrida rc
    INNER JOIN usuario u ON u.idUsuario = rc.fk_idUsuario
    WHERE rc.fk_idUsuario = ${idUsuario}
    ORDER BY dataHora_Formatada;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}





function listarPersonaGeral() {
    console.log("ACESSEI O FORUM  MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listarPersonaGeral()");
    var instrucaoSql = `
      	 SELECT 
     round(avg(rp.chanceToriel), 2) as chanceToriel,
	 round(avg(rp.chanceSans), 2) as chanceSans,
	 round(avg(rp.chancePapyrus), 2) as chancePapyrus,
	 round(avg(rp.chanceNapstablook), 2) as chanceNapstablook,
	 round(avg(rp.chanceUndyne), 2) as chanceUndyne,
	 round(avg(rp.chanceFlowey), 2) as chanceFlowey,
	 round(avg(rp.chanceFrisk), 2) as chanceFrisk,
	 round(avg(rp.chanceChara), 2) as chanceChara,
	 round(avg(rp.chanceMettaton), 2) as chanceMettaton,
	 round(avg(rp.chanceAsgore), 2) as chanceAsgore,
	 round(avg(rp.chanceAsriel), 2) as chanceAsriel
        FROM resultadopersona rp;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}




function listarQuizGeral() {
    console.log("ACESSEI O FORUM  MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listarQuizGeral()");
    var instrucaoSql = `
         SELECT 
            round(avg(acertos), 0) as acertos,
            round(avg(erros), 0) as erros
        FROM resultadoquiz;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}





function listarCPSgeral() {
    console.log("ACESSEI O FORUM  MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listarCPSgeral()");
    var instrucaoSql = `
          SELECT 
    round(avg(CPS), 2) as CPS
    FROM resultadocorrida;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}





function listarMinigameGeral() {
    console.log("ACESSEI O FORUM  MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listarMinigameGeral()");
    var instrucaoSql = `
        SELECT round(avg(rb.tempoPermanencia / 60), 1) AS tempo_permanencia
    FROM resultadobadtime rb
   
    
    UNION ALL
    
    SELECT round(avg(rp.tempoPermanencia / 60), 1) AS tempo_permanencia
    FROM resultadopiano rp
  
    
    UNION ALL
    
    SELECT round(avg(rc.tempoPermanencia / 60), 1) AS tempo_permanencia
    FROM resultadocorrida rc;
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
    listarCPS,
    listarPersonaGeral,
    listarQuizGeral,
    listarCPSgeral,
    listarMinigameGeral

}
