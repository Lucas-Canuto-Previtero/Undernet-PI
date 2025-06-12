var foto_usuario = sessionStorage.FOTO_PERFIL;
b_usuario.innerHTML = sessionStorage.NOME_USUARIO;
fotoPerfil.innerHTML = `<img src="${foto_usuario}" style=" object-fit: cover; border-radius: 15px; border: white solid 3px;">`;


var contagem = 3;
var distancia = 0;
var valendo = false;
var tempoTotal = 9;
var cliques = 0;
var tempoFinal;
var CPS;

function tocarAudio() {
    document.getElementById('audio').play();
}

function pararAudio() {
    document.getElementById('audio').pause();
    audio.currentTime = 0;
}

function iniciarCorrida() {
    contagemIniciar();
}


function contagemIniciar() {
    if (contagem > 0) {
        div_contagem.innerHTML = `<h1>${contagem}</h1>`
        contagem--;
        setTimeout(() => contagemIniciar(), 1000);

    } else if (contagem == 0) {
        contagem = 'VAI!';
        tocarAudio();
        div_contagem.innerHTML = `<h1>${contagem}</h1>`
        valendo = true;

        if (valendo = true) {
            somarMargem();
            setTimeout(() => contagemRegressiva(), 1000);

            function contagemRegressiva() {
                contarR();
            }

            function contarR() {
                if (tempoTotal > 0) {
                    div_contagem.innerHTML = `<h1>${tempoTotal}</h1>`
                    tempoTotal--;
                    setTimeout(() => contarR(), 1000);
                } else if (tempoTotal == 0) {
                    tempoFinal = 10;
                    tempoTotal = 'Acabou o tempo!';
                    pararAudio();
                    div_contagem.innerHTML = `<h1 style="color: red">${tempoTotal}</h1>`;
                    return tempoFinal, CPS = (cliques / tempoFinal).toFixed(2), div_resultado.innerHTML = `<h2> Sua pontuação foi de:<br>${CPS}cps</h2>`, salvarResultado(), atualizarRanking();
                }
            }




            function andarCaracol() {
                var caracol = document.getElementById("caracol");
                caracol.style.marginRight = `${distancia}%`;
            }

            function somarMargem() {
                document.addEventListener('keyup', function (event) {

                    if (tempoTotal >= -1) {
                        if (distancia >= 95) {
                            tempoFinal = 9 - tempoTotal;
                            tempoTotal = "Você venceu!";
                            pararAudio()
                            div_contagem.innerHTML = `<h1 style="color: green">${tempoTotal}</h1>`
                            return tempoFinal, CPS = (cliques / tempoFinal).toFixed(2), div_resultado.innerHTML = `<h2> Sua pontuação foi de:<br>${CPS}cps</h2>`, salvarResultado(), atualizarRanking();
                        }
                        if (event.key == 'z') {
                            distancia += 0.85;
                            cliques++;
                            andarCaracol();
                            return;
                        }
                    }
                });
            }
        }
    }
}


var tempoCorrida = 0;

function zerarTempo() {
    tempoCorrida = 0;
    atualizartempoCorrida();
}

zerarTempo();


function atualizartempoCorrida() {
    tempoCorrida++;
    return tempoCorrida;
}
setInterval(atualizartempoCorrida, 1000);





function listarCPSgeral() {
    fetch(`/corrida/listarCPSgeral`).then(function (resposta) {
        if (resposta.ok) {
            if (resposta.status == 204) {

                console.log("NENHUM DADO ENCONTRADO");

                return mediaClique.innerHTML = "Nenhum dado existente";

            }
            resposta.json().then(function (resposta) {

                var CPS = resposta[0].CPS;

                mediaClique.innerHTML = `${CPS} CPS`

            });
        } else {
            throw ('Houve um erro na API!');
        }
    }).catch(function (resposta) {
        console.error(resposta);

    });
}







function salvarResultado() {
    const idUsuario = sessionStorage.ID_USUARIO;

    fetch("/corrida/registrar", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            idUsuario: idUsuario,
            tempoCorrida: tempoCorrida,
            CPS: CPS
        })
    })
        .then(res => res.text())
        .then(msg => {
            console.log(msg);
        })
        .catch(err => {
            console.error("Erro ao realizar o envio:", err);
        });
}









function atualizarRanking() {
    fetch("/corrida/listar").then(function (resposta) {
        if (resposta.ok) {
            if (resposta.status == 204) {
                var ranking = document.getElementById("ranking_container");
                var mensagem = document.createElement("h1");
                mensagem.innerHTML = "Nenhum resultado encontrado.<br> Se já jogou, clique em reiniciar para atualizar o ranking."
                ranking.appendChild(mensagem);
                throw "Nenhum resultado encontrado!!";
            }

            resposta.json().then(function (resposta) {
                var totalCPS = 0;
                // var mediaCPS;

                // for (var i = 0; i < resposta.length; i++) {
                //     totalCPS += Number(resposta[i].CPS);
                // }

                // mediaCPS = totalCPS / resposta.length;


                // mediaClique.innerHTML = mediaCPS.toFixed(2);
                console.log("Dados recebidos: ", JSON.stringify(resposta));

                var ranking = document.getElementById("ranking_container");
                ranking.innerHTML = '';



                var trLRegistro = document.createElement("tr");
                var thLPosicao = document.createElement("th");
                var thLNome = document.createElement("th");
                var thLCPS = document.createElement("th");
                var thLData = document.createElement("th");

                thLPosicao.innerHTML = 'Posição'
                thLNome.innerHTML = 'Nome do Usuário'
                thLCPS.innerHTML = 'CPS'
                thLData.innerHTML = 'Data e Hora'

                trLRegistro.className = "legendaRegistro";
                thLPosicao.className = "legendathPosicao";
                thLNome.className = "legendathNome";
                thLCPS.className = "legendathCPS";
                thLData.className = "legendathData";

                trLRegistro.appendChild(thLPosicao)
                trLRegistro.appendChild(thLNome);
                trLRegistro.appendChild(thLCPS);
                trLRegistro.appendChild(thLData);

                ranking.appendChild(trLRegistro);


                for (let i = 0; i < resposta.length; i++) {
                    var registro = resposta[i];



                    // criando e manipulando elementos do HTML via JavaScript
                    var trRegistro = document.createElement("tr");
                    var thPosicao = document.createElement("th");
                    var thNome = document.createElement("th");
                    var thCPS = document.createElement("th");
                    var thData = document.createElement("th");



                    thPosicao.innerHTML = `${i + 1}`
                    thNome.innerHTML = `${registro['Nome:']}`;
                    thCPS.innerHTML = `${registro.CPS}`;
                    thData.innerHTML = `${registro['Data e Hora:']}`


                    trRegistro.className = "registro";
                    thPosicao.className = "thPosicao";
                    thNome.className = "thNome";
                    thCPS.className = "thCPS";
                    thData.className = "thData";



                    trRegistro.appendChild(thPosicao);
                    trRegistro.appendChild(thNome);
                    trRegistro.appendChild(thCPS);
                    trRegistro.appendChild(thData);



                    ranking.appendChild(trRegistro);
                }

            });
        } else {
            throw ('Houve um erro na API!');
        }
    }).catch(function (resposta) {
        console.error(resposta);

    });
}







