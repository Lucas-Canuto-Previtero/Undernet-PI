var database = require("../database/config");

function listar() {
    console.log("ACESSEI O FORUM  MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
    var instrucaoSql = `
        SELECT 
            p.idPostagem,
            p.texto AS descricao,
            p.fk_idUsuario,
            p.tipoPostagem,
            p.imagem,
            (SELECT DATE_FORMAT(p.dataHora, '%d/%m/%Y %H:%i:%s'))  as dataHora_Formatada,
            u.fotoPerfil,
            u.idUsuario,
            u.nome,
            u.email,
            u.senha
        FROM postagem p
            INNER JOIN usuario u
                ON p.fk_idUsuario = u.idUsuario order by idPostagem desc;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


function listarPorTipo(tipoFiltro) {
    console.log("ACESSEI O FORUM MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listarPorUsuario()");
    var instrucaoSql = `
        SELECT 
            p.idPostagem,
            p.texto AS descricao,
            p.fk_idUsuario,
            p.tipoPostagem,
            p.imagem,
            (SELECT DATE_FORMAT(p.dataHora, '%d/%m/%Y %H:%i:%s'))  as dataHora_Formatada,
            u.fotoPerfil,
            u.idUsuario,
            u.nome,
            u.email,
            u.senha
        FROM postagem p
            INNER JOIN usuario u
                ON p.fk_idUsuario = u.idUsuario 
                WHERE p.tipoPostagem LIKE "${tipoFiltro}"
                 order by p.idPostagem desc;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function publicar(idUsuario, descricao, tipoPostagem, imagem) {
    console.log("ACESSEI O postagem MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function publicar(): ", idUsuario, descricao, tipoPostagem, imagem);
    var instrucaoSql = `
        INSERT INTO postagem (fk_idUsuario, texto, tipoPostagem, imagem) VALUES ( ${idUsuario}, '${descricao}', '${tipoPostagem}', '${imagem}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function editarTexto(novaDescricao, idPostagem) {
    console.log("ACESSEI O FORUM MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function editarTexto(): ", novaDescricao, idPostagem);
    var instrucaoSql = `
        UPDATE postagem SET texto = '${novaDescricao}' WHERE idPostagem = ${idPostagem};
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function editarImagem(novaImagem, idPostagem) {
    console.log("ACESSEI O FORUM MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function editarImagem(): ", novaImagem, idPostagem);
    var instrucaoSql = `
        UPDATE postagem SET imagem = '${novaImagem}' WHERE idPostagem = ${idPostagem};
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function deletar(idPostagem) {
    console.log("ACESSEI O FORUM MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function deletar():", idPostagem);
    var instrucaoSql = `
        DELETE FROM postagem WHERE idPostagem = ${idPostagem};
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    listar,
    listarPorTipo,
    publicar,
    editarTexto,
    editarImagem,
    deletar
}
