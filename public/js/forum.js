 function atualizarCaracteres() {
        var caracteres = textarea_descricao.value.length;
        qtd_caracteres.innerHTML = `${caracteres}`
    }

    function exibirImg() {
        var imagem = ipt_imagem.value;
        previewImg.innerHTML = `<img src="${imagem}" alt="" style="width: auto ; height: 150px; margin: 8px;">`;
    }



    var foto_usuario = sessionStorage.FOTO_PERFIL;
    b_usuario.innerHTML = sessionStorage.NOME_USUARIO;
    fotoPerfil.innerHTML = `<img src="${foto_usuario}" style=" object-fit: cover; border-radius: 15px; border: white solid 3px;">`;


    function limparFormulario() {
        document.getElementById("form_postagem").reset();
    }

    function publicar() {

        var idUsuario = sessionStorage.ID_USUARIO;

        var corpo = {
            descricao: form_postagem.descricao.value,
            tipo: form_postagem.tipo.value,
            imagem: form_postagem.imagem.value
        }


        fetch(`/forum/publicar/${idUsuario}`, {
            method: "post",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(corpo)
        }).then(function (resposta) {

            console.log("resposta: ", resposta);

            if (resposta.ok) {
                window.alert("Post realizado com sucesso pelo usuario de ID: " + idUsuario + "!");
                window.location = "forum.html";
                limparFormulario();
                finalizarAguardar();
            } else if (resposta.status == 404) {
                window.alert("Deu 404!");
            } else {
                throw ("Houve um erro ao tentar realizar a postagem! Código da resposta: " + resposta.status);
            }
        }).catch(function (resposta) {
            console.log(`#ERRO: ${resposta}`);
            finalizarAguardar();
        });

        return false;

    }

    function editar(idPostagem) {
        sessionStorage.ID_POSTAGEM_EDITANDO = idPostagem;
        console.log("cliquei em editar - " + idPostagem);
        window.location = "edicao-forum.html"

    }

    function deletar(idPostagem) {
        console.log("Criar função de apagar post escolhido - ID" + idPostagem);
        fetch(`/forum/deletar/${idPostagem}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        }).then(function (resposta) {

            if (resposta.ok) {
                window.alert("Post deletado com sucesso pelo usuario de email: " + sessionStorage.getItem("EMAIL_USUARIO") + "!");
                window.location = "forum.html"
            } else if (resposta.status == 404) {
                window.alert("Deu 404!");
            } else {
                throw ("Houve um erro ao tentar realizar a postagem! Código da resposta: " + resposta.status);
            }
        }).catch(function (resposta) {
            console.log(`#ERRO: ${resposta}`);
        });
    }

    function atualizarFeed() {
        fetch("/forum/listar").then(function (resposta) {
            if (resposta.ok) {
                if (resposta.status == 204) {
                    var feed = document.getElementById("feed_container");
                    var mensagem = document.createElement("span");
                    mensagem.innerHTML = "Nenhum resultado encontrado."
                    feed.appendChild(mensagem);
                    throw "Nenhum resultado encontrado!!";
                }

                resposta.json().then(function (resposta) {
                    console.log("Dados recebidos: ", JSON.stringify(resposta));

                    var feed = document.getElementById("feed_container");
                    feed.innerHTML = "";
                    for (let i = 0; i < resposta.length; i++) {
                        var publicacao = resposta[i];

                        // criando e manipulando elementos do HTML via JavaScript
                        var divPublicacao = document.createElement("div");
                        var divFotoContent = document.createElement("div");
                        var divDadosPubli = document.createElement("div")
                        var divfotoPerfil = document.createElement("div");
                        var spanData = document.createElement("span");
                        var spanNome = document.createElement("span");
                        var spanTipo = document.createElement("span");
                        var divDescricao = document.createElement("div");
                        var divpostImg = document.createElement("div")
                        var divButtons = document.createElement("div");
                        var btnEditar = document.createElement("button");
                        var btnDeletar = document.createElement("button");

                        divPublicacao.className = "publicacao";
                        divFotoContent.className = "FotoContent";
                        divDadosPubli.className = "dadosPubli";

                        divfotoPerfil.innerHTML = `<img src="${publicacao.fotoPerfil}">`;
                        spanData.innerHTML = "<b>Data: </b>" + publicacao.dataHora_Formatada + "<br>";
                        spanNome.innerHTML = "<b>Autor: </b>" + publicacao.nome + "<br>";
                        spanTipo.innerHTML = `${publicacao.tipoPostagem}<br>`;
                        divDescricao.innerHTML = "<b>Descrição: </b>" + publicacao.descricao + "<br>";


                        divpostImg.innerHTML = `<img src="${publicacao.imagem}">`;


                        btnEditar.innerHTML = "Editar";
                        btnDeletar.innerHTML = "Deletar";

                        divfotoPerfil.className = "publicacao-imgPerfil";
                        spanNome.className = "publicacao-nome";
                        divDescricao.className = "publicacao-descricao";
                        divpostImg.className = "publicacao-img";
                        spanTipo.className = "publicacao-tipo";

                        divButtons.className = "div-buttons"

                        btnEditar.className = "publicacao-btn-editar"
                        btnEditar.id = "btnEditar" + publicacao.idPostagem;
                        btnEditar.setAttribute("onclick", `editar(${publicacao.idPostagem})`);

                        btnDeletar.className = "publicacao-btn-editar"
                        btnDeletar.id = "btnDeletar" + publicacao.idPostagem;
                        btnDeletar.setAttribute("onclick", `deletar(${publicacao.idPostagem})`);

                        divPublicacao.appendChild(divFotoContent);
                        divFotoContent.appendChild(divfotoPerfil);
                        divFotoContent.appendChild(divDadosPubli);
                        divDadosPubli.appendChild(spanData);
                        divDadosPubli.appendChild(spanNome);
                        divPublicacao.appendChild(spanTipo);
                        divDadosPubli.appendChild(divDescricao);
                        divDadosPubli.appendChild(divpostImg);
                        divDadosPubli.appendChild(divButtons);

                        if (sessionStorage.ID_USUARIO == publicacao.fk_idUsuario) {
                            divButtons.appendChild(btnEditar);
                            divButtons.appendChild(btnDeletar);
                        }
                        feed.appendChild(divPublicacao);
                    }

                    finalizarAguardar();
                });
            } else {
                throw ('Houve um erro na API!');
            }
        }).catch(function (resposta) {
            console.error(resposta);
            finalizarAguardar();
        });
    }





    function atualizarFiltro() {
        var tipoFiltro = document.getElementById("tipoFiltro").value;



        if (tipoFiltro === 'none') {
            atualizarFeed();
            return;
        }
        fetch(`/forum/listarPorTipo/${tipoFiltro}`).then(function (resposta) {
            if (resposta.ok) {
                if (resposta.status == 204) {
                    var feed = document.getElementById("feed_container");
                    var mensagem = document.createElement("span");
                    mensagem.innerHTML = "Nenhum resultado encontrado."
                    feed.appendChild(mensagem);
                    throw "Nenhum resultado encontrado!!";
                }

                resposta.json().then(function (resposta) {
                    console.log("Dados recebidos: ", JSON.stringify(resposta));

                    var feed = document.getElementById("feed_container");
                    feed.innerHTML = "";
                    for (let i = 0; i < resposta.length; i++) {
                        var publicacao = resposta[i];

                        // criando e manipulando elementos do HTML via JavaScript
                        var divPublicacao = document.createElement("div");
                        var divFotoContent = document.createElement("div");
                        var divDadosPubli = document.createElement("div")
                        var divfotoPerfil = document.createElement("div");
                        var spanData = document.createElement("span");
                        var spanNome = document.createElement("span");
                        var spanTipo = document.createElement("span");
                        var divDescricao = document.createElement("div");
                        var divpostImg = document.createElement("div")
                        var divButtons = document.createElement("div");
                        var btnEditar = document.createElement("button");
                        var btnDeletar = document.createElement("button");

                        divPublicacao.className = "publicacao";
                        divFotoContent.className = "FotoContent";
                        divDadosPubli.className = "dadosPubli";

                        divfotoPerfil.innerHTML = `<img src="${publicacao.fotoPerfil}">`;
                        spanData.innerHTML = "<b>Data: </b>" + publicacao.dataHora_Formatada + "<br>";
                        spanNome.innerHTML = "<b>Autor: </b>" + publicacao.nome + "<br>";
                        spanTipo.innerHTML = `${publicacao.tipoPostagem}<br>`;
                        divDescricao.innerHTML = "<b>Descrição: </b>" + publicacao.descricao + "<br>";
                        divpostImg.innerHTML = `<img src="${publicacao.imagem}">`;
                        btnEditar.innerHTML = "Editar";
                        btnDeletar.innerHTML = "Deletar";

                        divfotoPerfil.className = "publicacao-imgPerfil";
                        spanNome.className = "publicacao-nome";
                        divDescricao.className = "publicacao-descricao";
                        divpostImg.className = "publicacao-img";
                        spanTipo.className = "publicacao-tipo";

                        divButtons.className = "div-buttons"

                        btnEditar.className = "publicacao-btn-editar"
                        btnEditar.id = "btnEditar" + publicacao.idPostagem;
                        btnEditar.setAttribute("onclick", `editar(${publicacao.idPostagem})`);

                        btnDeletar.className = "publicacao-btn-editar"
                        btnDeletar.id = "btnDeletar" + publicacao.idPostagem;
                        btnDeletar.setAttribute("onclick", `deletar(${publicacao.idPostagem})`);

                        divPublicacao.appendChild(divFotoContent);
                        divFotoContent.appendChild(divfotoPerfil);
                        divFotoContent.appendChild(divDadosPubli);
                        divDadosPubli.appendChild(spanData);
                        divDadosPubli.appendChild(spanNome);
                        divPublicacao.appendChild(spanTipo);
                        divDadosPubli.appendChild(divDescricao);
                        divDadosPubli.appendChild(divpostImg);
                        divDadosPubli.appendChild(divButtons);

                        if (sessionStorage.ID_USUARIO == publicacao.fk_idUsuario) {
                            divButtons.appendChild(btnEditar);
                            divButtons.appendChild(btnDeletar);
                        }
                        feed.appendChild(divPublicacao);
                    }

                    finalizarAguardar();
                });
            } else {
                throw ('Houve um erro na API!');
            }
        }).catch(function (resposta) {
            console.error(resposta);
            finalizarAguardar();
        });
    }