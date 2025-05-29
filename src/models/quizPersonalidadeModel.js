var database = require("../database/config");

function listar(idUsuario) {
    var instrucao = `
        SELECT chanceToriel, chanceSans, chancePapyrus, chanceNapstablook, chanceUndyne, chanceFlowey, chanceFrisk, chanceChara, chanceMettaton, chanceAsgore, chanceAsriel, fk_idUsuario FROM resultadoPersona WHERE fk_idUsuario = ${idUsuario};
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function cadastrar(chanceToriel, chanceSans, chancePapyrus, chanceNapstablook, chanceUndyne, chanceFlowey, chanceFrisk, chanceChara, chanceMettaton, chanceAsgore, chanceAsriel, idUsuario) {
    var instrucao = `
        INSERT INTO resultadoPersona (chanceToriel, chanceSans, chancePapyrus, chanceNapstablook, chanceUndyne, chanceFlowey, chanceFrisk, chanceChara, chanceMettaton, chanceAsgore, chanceAsriel, fk_idUsuario)
        VALUES (${chanceToriel}, ${chanceSans}, ${chancePapyrus}, ${chanceNapstablook}, ${chanceUndyne}, ${chanceFlowey}, ${chanceFrisk}, ${chanceChara}, ${chanceMettaton}, ${chanceAsgore}, ${chanceAsriel}, ${idUsuario});
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}


module.exports = {
    listar,
    cadastrar
};