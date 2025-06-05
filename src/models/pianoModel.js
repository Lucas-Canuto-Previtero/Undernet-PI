var database = require("../database/config");

function listar(idUsuario) {
    var instrucao = `
        SELECT tempoPermanencia FROM resultadopiano WHERE fk_idUsuario = ${idUsuario};
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function cadastrar(idUsuario, tempoBT) {
    var instrucao = `
        INSERT INTO resultadopiano (fk_idUsuario, tempoPermanencia)
        VALUES (${idUsuario}, ${tempoBT});
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function atualizar(idUsuario, novoTempo) {
    var instrucao = `
        UPDATE resultadopiano
        SET tempoPermanencia = ${novoTempo}
        WHERE fk_idUsuario = ${idUsuario};
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    listar,
    cadastrar,
    atualizar
};

// Aqui é como se fosse um arquivo para guardar as funções que serão utilizadas para consulta no banco de dados. 
// Aqui eu crio a função, configuro ela e depois retorno para o front.
//OBS: Aqui vai pegar as configurações do arquivo /database/config.js e declarar o valor da variavel resultado. Esse resultado já é 
// transformado em um json para facilitar a manipulação e vizzualização nossa e da máquina.
