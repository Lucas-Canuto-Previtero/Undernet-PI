 function tocarAudio() {
        document.getElementById('audio').play();
    }

    var foto_usuario = sessionStorage.FOTO_PERFIL;
    b_usuario.innerHTML = sessionStorage.NOME_USUARIO;
    fotoPerfil.innerHTML = `<img src="${foto_usuario}" style=" object-fit: cover; border-radius: 15px; border: white solid 3px;">`;

    var idUsuario = sessionStorage.ID_USUARIO;


    var chanceToriel = 0;
    var chanceSans = 0;
    var chancePapyrus = 0;
    var chanceNapstablook = 0;
    var chanceUndyne = 0;
    var chanceFlowey = 0;
    var chanceFrisk = 0;
    var chanceChara = 0;
    var chanceMettaton = 0;
    var chanceAsgore = 0;
    var chanceAsriel = 0;


    var nPergunta = 0;

    var pergunta1 = ` <h1>1º Pergunta: <br>
             Como você se descreveria em poucas palavras?</h1>
             <br>
         <div class="pergunta">
             <button onclick="chanceToriel++, chanceFrisk++, chanceAsgore++, nPergunta++, rodarQuiz()">Protetor(a) e gentil</button>

             <button onclick="chanceSans++, nPergunta++, rodarQuiz()">Divertido(a) e sarcástico(a)</button>

             <br>

             <button onclick="chanceUndyne++, chanceChara++, nPergunta++, rodarQuiz()">Determinado(a) e corajoso(a)</button>

             <button onclick="chanceNapstablook++, chanceAsriel++, nPergunta++, rodarQuiz()">Sensível e melancólico(a)</button>

             <button onclick="chanceFlowey++, chanceMettaton++, nPergunta++, rodarQuiz()">Ambicioso(a) e manipulador(a)</button>
        </div>`

    var pergunta2 = `
    <h1>2º Pergunta: <br>
             O que você faria ao encontrar um monstro hostil?</h1>
             <br>
         <div class="pergunta">
             <button onclick="chanceToriel++, chanceFrisk++, nPergunta++, rodarQuiz()">Tentaria conversar e resolver pacificamente</button>

             <button onclick="chanceUndyne++, chanceAsgore++, nPergunta++, rodarQuiz()">Lutaria para proteger os outros</button>

             <br>

             <button onclick="chanceNapstablook++, chanceAsriel++, nPergunta++, rodarQuiz()">Fugiria e evitaria confronto</button>

             <button onclick="chanceSans++, chanceChara++, nPergunta++, rodarQuiz()">Usaria truques ou palavras afiadas</button>

             <button onclick="chanceFlowey++, nPergunta++, rodarQuiz()">Tentaria usar o monstro para seus próprios fins</button>
        </div>`

    var pergunta3 = `
    <h1>3º Pergunta: <br>
             Qual dessas atividades parece mais divertida?</h1>
             <br>
         <div class="pergunta">
             <button onclick="chanceToriel++, chancePapyrus++, nPergunta++, rodarQuiz()">Cozinhar algo gostoso</button>

             <button onclick="chanceMettaton++, chancePapyrus++, nPergunta++, rodarQuiz()">Fazer um show!</button>

             <br>

             <button onclick="chanceNapstablook++, chanceAsriel++, nPergunta++, rodarQuiz()">Escrever músicas ou ficar ouvindo lo-fi</button>

             <button onclick="chanceUndyne++, nPergunta++, rodarQuiz()">Explorar lugares perigosos e lutar contra injustiças</button>

             <button onclick="chanceSans++, chanceFrisk++, nPergunta++, rodarQuiz()">Relaxar e fazer piadas com amigos</button>
        </div>`

    var pergunta4 = `
    <h1>4º Pergunta: <br>
           Você vê alguém triste. O que faz?</h1>

             <br>
             
         <div class="pergunta">
             <button onclick="chanceToriel++, chanceFrisk++, nPergunta++, rodarQuiz()">Ofereço apoio e fico do lado da pessoa</button>

             <button onclick="chanceSans++, chancePapyrus++, nPergunta++, rodarQuiz()">Tento fazê-la rir com piadas</button>

             <br>

             <button onclick="chanceNapstablook++, chanceAsriel++, nPergunta++, rodarQuiz()">Fico perto em silêncio, respeitando o espaço dela</button>

             <button onclick="chanceFlowey++, chanceChara++, nPergunta++, rodarQuiz()">Me afasto, pois não gosto de lidar com emoções</button>

             <button onclick="chanceMettaton++, nPergunta++, rodarQuiz()">Transformo a situação em algo teatral e emocional</button>
        </div>`

    var pergunta5 = `
    <h1>5º Pergunta: <br>
          Você se considera mais...</h1>

             <br>
             
         <div class="pergunta">
             <button onclick="chanceToriel++, chanceAsgore++, nPergunta++, rodarQuiz()">Calmo(a) e protetor(a)</button>

             <button onclick="chanceUndyne++, chanceAsriel++, nPergunta++, rodarQuiz()">Intenso(a) e emocional</button>

             <br>

             <button onclick="chanceSans++, chanceFlowey++, nPergunta++, rodarQuiz()">Racional e distante</button>

             <button onclick="chancePapyrus++, chanceMettaton++, nPergunta++, rodarQuiz()">Alegre e cheio(a) de energia</button>

             <button onclick="chanceFrisk++, chanceNapstablook++, nPergunta++, rodarQuiz()">Curioso(a) e reflexivo(a)</button>
        </div>`



    var pergunta6 = `
    <h1>6º Pergunta: <br>
         Qual dessas frases combina com você?</h1>

             <br>
             
         <div class="pergunta">
             <button onclick="chanceToriel++, chanceFrisk++, nPergunta++, rodarQuiz()">“Sempre há um caminho pacífico.”</button>

             <button onclick="chanceUndyne++, nPergunta++, rodarQuiz()">“A justiça é feita com ação!”</button>

             <br>

             <button onclick="chanceSans++, chanceFlowey++, nPergunta++, rodarQuiz()">“Nada importa de verdade, né?”</button>

             <button onclick="chanceNapstablook++, nPergunta++, rodarQuiz()">“Você quer ouvir minha nova mixtape?”</button>

             <button onclick="chanceMettaton++, nPergunta++, rodarQuiz()">“O que é aquela estrela vindo? Ah sim, sou eu!”</button>
        </div>`



    var pergunta7 = `
    <h1>7º Pergunta: <br>
        Se alguém não gosta de você, o que você pensa?</h1>

             <br>
             
         <div class="pergunta">
             <button onclick="chanceToriel++, chanceFrisk++, nPergunta++, rodarQuiz()">"Quero entender o motivo e melhorar."</button>

             <button onclick="chanceSans++, chanceMettaton++, nPergunta++, rodarQuiz()">"Problema é dela!"</button>

             <br>

             <button onclick="chanceAsriel++, chanceNapstablook++, nPergunta++, rodarQuiz()">"Isso me machuca mais do que deveria..."</button>

             <button onclick="chanceChara++, chanceFlowey++, nPergunta++, rodarQuiz()">"É só mais uma fraqueza dos outros."</button>

             <button onclick="chancePapyrus++, nPergunta++, rodarQuiz()">"Vou convencê-la do contrário!"
             </button>
        </div>`



    var pergunta8 = `
    <h1>8º Pergunta: <br>
        Como você age com novas pessoas?</h1>

             <br>
             
         <div class="pergunta">
             <button onclick="chanceToriel++, chanceAsgore++, nPergunta++, rodarQuiz()">Acolhedor(a) e protetor(a)</button>

             <button onclick="chanceSans++, chancePapyrus++, nPergunta++, rodarQuiz()">Extrovertido(a) e engraçado(a)</button>

             <br>

             <button onclick="chanceFrisk++, chanceNapstablook++, nPergunta++, rodarQuiz()">Cauteloso(a), mas curioso(a)</button>

             <button onclick="chanceChara++, chanceFlowey++, nPergunta++, rodarQuiz()">Desconfiado(a) e na defensiva</button>

             <button onclick="chanceMettaton++, nPergunta++, rodarQuiz()">Sedutor(a) e performático(a)
             </button>
        </div>`



    var pergunta9 = `
    <h1>9º Pergunta: <br>
       Qual dessas palavras te define melhor?</h1>

             <br>
             
         <div class="pergunta">
             <button onclick="chanceToriel++, chanceFrisk++, nPergunta++, rodarQuiz()">Compaixão</button>

             <button onclick="chanceUndyne++, chanceChara++, nPergunta++, rodarQuiz()">Coragem</button>

             <br>

             <button onclick="chanceAsriel++, chanceNapstablook++, nPergunta++, rodarQuiz()">Solidão</button>

             <button onclick="chanceMettaton++, chancePapyrus++, nPergunta++, rodarQuiz()">Estilo</button>

             <button onclick="chanceSans++, chanceFlowey++, nPergunta++, rodarQuiz()">Sarcasmo
             </button>
        </div>`



    var pergunta10 = `
    <h1>10º Pergunta: <br>
     Como você encara seu passado?</h1>

             <br>
             
         <div class="pergunta">
             <button onclick="chanceAsgore++, chanceAsriel++, finalizarQuiz()">Com saudade e esperança de redenção</button>

             <button onclick="chanceFlowey++, chanceChara++, finalizarQuiz()">Como algo que me tornou mais forte</button>

             <br>

             <button onclick="chanceSans++, chanceNapstablook++, finalizarQuiz()">Tento não pensar muito nisso</button>

             <button onclick="chanceMettaton++, chancePapyrus++, finalizarQuiz()">Me orgulho de quem fui</button>

             <button onclick="chanceFrisk++, chanceToriel++, finalizarQuiz()">Levo lições valiosas para seguir melhor
             </button>
        </div>`



    function rodarQuiz() {
        const perguntas = [pergunta1, pergunta2, pergunta3, pergunta4, pergunta5, pergunta6, pergunta7, pergunta8, pergunta9, pergunta10]
        div_contentQuiz.innerHTML = `${perguntas[nPergunta]}`
    }


    function finalizarQuiz() {
        cadastrar();

        const chances = [chanceToriel, chanceSans, chancePapyrus, chanceNapstablook, chanceUndyne, chanceFlowey, chanceFrisk, chanceChara, chanceMettaton, chanceAsgore, chanceAsriel];
        var totalPontos = 0;


        for (var i = 0; i < chances.length; i++) {
            totalPontos += chances[i];
        }


        chanceToriel = (chanceToriel * 100 / totalPontos).toFixed(2);
        chanceSans = (chanceSans * 100 / totalPontos).toFixed(2);
        chancePapyrus = (chancePapyrus * 100 / totalPontos).toFixed(2);
        chanceNapstablook = (chanceNapstablook * 100 / totalPontos).toFixed(2);
        chanceUndyne = (chanceUndyne * 100 / totalPontos).toFixed(2);
        chanceFlowey = (chanceFlowey * 100 / totalPontos).toFixed(2);
        chanceFrisk = (chanceFrisk * 100 / totalPontos).toFixed(2);
        chanceChara = (chanceChara * 100 / totalPontos).toFixed(2);
        chanceMettaton = (chanceMettaton * 100 / totalPontos).toFixed(2);
        chanceAsgore = (chanceAsgore * 100 / totalPontos).toFixed(2);
        chanceAsriel = (chanceAsriel * 100 / totalPontos).toFixed(2);


        const resultado = [chanceToriel, chanceSans, chancePapyrus, chanceNapstablook, chanceUndyne, chanceFlowey, chanceFrisk, chanceChara, chanceMettaton, chanceAsgore, chanceAsriel];
        var fotoPersonagem;
        var descPersona = '';
        var nomePersonagem = '';
        var personagemFinal = 0;


        for (var i = 0; i < resultado.length; i++) {
            if (Number(resultado[i]) > personagemFinal || Number(resultado[i]) == personagemFinal) {
                personagemFinal = Number(resultado[i]);
            }
        }
        console.log(resultado)

        console.log(personagemFinal)


        if (personagemFinal == chanceToriel) {
            fotoPersonagem = '/assets/img/personagemResult/Toriel.png'
            nomePersonagem = 'Toriel'
        } else if (personagemFinal == chanceSans) {
            fotoPersonagem = '/assets/img/personagemResult/Sans.png'
            nomePersonagem = 'Sans'
        } else if (personagemFinal == chancePapyrus) {
            fotoPersonagem = '/assets/img/personagemResult/Papyrus.png'
            nomePersonagem = 'Papyrus'
        } else if (personagemFinal == chanceNapstablook) {
            fotoPersonagem = '/assets/img/personagemResult/napstablook.png'
            nomePersonagem = 'Napstablook'
        } else if (personagemFinal == chanceUndyne) {
            fotoPersonagem = '/assets/img/personagemResult/undyne.png'
            nomePersonagem = 'Undyne'
        } else if (personagemFinal == chanceFlowey) {
            fotoPersonagem = '/assets/img/personagemResult/flowey.png'
            nomePersonagem = 'Flowey'
        } else if (personagemFinal == chanceFrisk) {
            fotoPersonagem = '/assets/img/personagemResult/frisk.png'
            nomePersonagem = 'Frisk'
        } else if (personagemFinal == chanceChara) {
            fotoPersonagem = '/assets/img/personagemResult/chara.png'
            nomePersonagem = 'Chara'
        } else if (personagemFinal == chanceMettaton) {
            fotoPersonagem = '/assets/img/personagemResult/Mettaton.png'
            nomePersonagem = 'Mettaton'
        } else if (personagemFinal == chanceAsgore) {
            fotoPersonagem = '/assets/img/personagemResult/asgore.png'
            nomePersonagem = 'Asgore'
        } else if (personagemFinal == chanceAsriel) {
            fotoPersonagem = '/assets/img/personagemResult/asriel.png'
            nomePersonagem = 'Asriel'
        }


        if (personagemFinal == chanceToriel) {
            descPersona = 'Assim como a Toriel, você é naturalmente protetor(a) e acolhedor(a). Tem uma alma maternal (ou paternal) e se preocupa profundamente com o bem-estar daqueles ao seu redor, mesmo que isso signifique se sacrificar em silêncio. Prefere resolver conflitos com carinho e conversa, e muitas vezes assume responsabilidades emocionais que ninguém te pediu para carregar. Seu senso de empatia e desejo por um ambiente de paz tornam você um ponto de equilíbrio em meio ao caos.'
        } else if (personagemFinal == chanceSans) {
            descPersona = 'Você compartilha da essência de Sans: alguém que esconde uma mente afiada por trás de um sorriso preguiçoso e piadas sarcásticas. Seu senso de humor é uma defesa contra um mundo que você já analisou profundamente demais. Você prefere observar antes de agir, e embora pareça distante, se importa mais do que demonstra. Seu maior conflito talvez seja entre a vontade de fazer diferença e o cansaço existencial que carrega. E mesmo assim, você continua sorrindo.'
        } else if (personagemFinal == chancePapyrus) {
            descPersona = 'Assim como Papyrus, você tem uma energia vibrante e um coração imenso. Gosta de agradar, busca reconhecimento e, mais do que tudo, quer ser valorizado pelas suas intenções puras. Pode parecer ingênuo(a) em alguns momentos, mas por trás dessa ingenuidade está uma força emocional enorme: você não desiste das pessoas, acredita no bem e encara cada falha como uma nova tentativa. Sua autenticidade e entusiasmo são raros — e inspiradores.'
        } else if (personagemFinal == chanceNapstablook) {
            descPersona = 'Você se identifica com Napstablook: introspectivo(a), sensível e emocionalmente profundo(a). Gosta de ficar no seu canto, absorvendo o mundo através da arte, da música ou da contemplação silenciosa. Às vezes sente que não se encaixa ou que não é notado(a), mas isso só torna sua alma ainda mais gentil e compreensiva. Você tem uma conexão única com sentimentos que a maioria prefere ignorar. Sua presença é silenciosa, mas inesquecível.'
        } else if (personagemFinal == chanceUndyne) {
            descPersona = 'Como Undyne, você é movido(a) por paixão, coragem e senso de justiça. É o tipo de pessoa que defende o que acredita sem hesitar, mesmo quando o mundo parece contra você. Em sua essência, há força e lealdade — duas qualidades que te tornam alguém que todos gostariam de ter ao lado em tempos difíceis. Sua impulsividade vem do coração: você sente tudo com intensidade e age com bravura, porque prefere errar lutando do que se esconder.'
        } else if (personagemFinal == chanceFlowey) {
            descPersona = 'Você se parece com Flowey em um aspecto mais complexo: você já viu o lado duro do mundo e isso moldou sua visão sobre ele. Sua racionalidade e estratégia muitas vezes se sobrepõem à emoção, criando uma postura mais fria, mas altamente eficaz. Você sabe o que quer, e mesmo que esconda seus sentimentos, nada escapa ao seu olhar crítico. Há poder em sua maneira de pensar — mas também um chamado interno por transformação, que talvez ainda esteja em silêncio.'
        } else if (personagemFinal == chanceFrisk) {
            descPersona = 'Assim como Frisk, você é curioso(a), silenciosamente corajoso(a) e guiado(a) por um forte senso de moral. Você observa, sente, entende… e então age com intenção e cuidado. Não busca brilhar, mas sim construir pontes, criar entendimento e crescer com cada passo. Sua maior força é sua empatia ativa — você se conecta com as pessoas mesmo sem palavras, e isso te torna alguém que deixa marcas profundas, mesmo que discretas.'
        } else if (personagemFinal == chanceChara) {
            descPersona = 'Você reflete os aspectos mais diretos e sombrios de Chara: inteligência, observação e um certo desencanto com o mundo. Você é alguém que prefere a verdade, por mais dura que seja, e não tem medo de mergulhar nas complexidades da própria mente. Existe uma dualidade em você — uma mistura de luz e sombra — e é exatamente isso que te torna tão único(a). Você não se esconde da dor: a transforma em força.'
        } else if (personagemFinal == chanceMettaton) {
            descPersona = 'Como Mettaton, você ama o palco — literal ou metaforicamente. Você se expressa com intensidade, seja com arte, fala ou presença. Existe em você um desejo legítimo de ser visto(a), admirado(a), e de deixar uma marca memorável. Seu carisma pode esconder inseguranças, mas é na performance que você encontra sentido. Você sabe que a vida é um espetáculo — e está aqui para fazer o seu brilhar.'
        } else if (personagemFinal == chanceAsgore) {
            descPersona = 'Você é como Asgore: uma alma bondosa, presa entre o dever e o coração. Sua gentileza natural às vezes entra em conflito com escolhas difíceis, e você sofre profundamente quando precisa tomar decisões que afetam os outros. Você lidera com compaixão, mas também carrega culpa e saudade. Seu silêncio carrega histórias que poucos conhecem. Ainda assim, seu desejo de redenção e de fazer o bem prevalece — e isso é nobre.'
        } else if (personagemFinal == chanceAsriel) {
            descPersona = 'Você compartilha da alma de Asriel: alguém que sente tudo de forma intensa, profunda e honesta. Ama de verdade, sofre com o passado, e deseja genuinamente consertar o que foi quebrado. Existe em você uma grande dualidade: força e fragilidade, luz e sombra, esperança e medo. Mas, acima de tudo, há amor. Amor que deseja proteger, reconstruir e recomeçar — mesmo que isso signifique se reinventar completamente.'
        }

        div_contentQuiz.innerHTML = `
             <h1>E o resultado final é...<br>
             ${nomePersonagem}!</h1>
    
                <img src="${fotoPersonagem}" alt="">
    
                <h2>${descPersona}</h2>
    
             <div class="grafico">
                <canvas id="graficoPersona"></canvas>
            </div>`

        const ctx = document.getElementById('graficoPersona');

        new Chart(ctx, {
            type: 'pie',
            data: {
                labels:
                    ['Toriel', 'Sans', 'Papyrus', 'Napstablook', 'Undyne', 'Flowey', 'Frisk', 'Chara', 'Mettaton', 'Asgore', 'Asriel'],
                datasets: [{
                    label: 'Chance em %',
                    backgroundColor: [
                        'purple',
                        '#34b5ff',
                        'orange',
                        'white',
                        'blue',
                        'yellow',
                        'red',
                        'darkred',
                        '#ff00a6',
                        '#966100',
                        'lightsalmon',
                    ],
                    data: [chanceToriel, chanceSans, chancePapyrus, chanceNapstablook, chanceUndyne, chanceFlowey, chanceFrisk, chanceChara, chanceMettaton, chanceAsgore, chanceAsriel],
                    borderWidth: 1,
                    borderColor: 'white'
                }]
            },
            options: {
                plugins: {
                    legend: {
                        position: 'right',
                        display: true,
                        labels: { color: "#fff" }
                    }
                }
            }
        });



    }





    function listar(idUsuario) {
        var idUsuario = sessionStorage.ID_USUARIO;
        console.log(idUsuario)
        fetch(`/quizPersonalidade/listar/${idUsuario}`).then(function (resposta) {
            if (resposta.ok) {
                if (resposta.status == 204) {
                    throw "Nenhum resultado encontrado!!";
                }


                resposta.json().then(function (resposta) {
                    console.log("Dados recebidos: ", JSON.stringify(resposta));
                    div_contentQuiz.innerHTML = `<h1> Você já respondeu o teste e não pode refaze - lo.</h1>
                    <h2>Para ver o resultado do teste clique no botão abaixo para ser redirecionado para a página de usuário ou acesse diretamente a página.</h2>
                    <div class = "botaoBlockQuiz">
                    <button onclick="window.location = 'minigames.html'">Voltar para minigames</button><br>
                    <button onclick="window.location = 'usuario.html'">Ir para a página de usuário</button>
                    </div>`

                });
            } else {
                throw ('Houve um erro na API!');
            }
        }).catch(function (resposta) {
            console.error(resposta);
        });
    }



    function cadastrar() {
        const chances = [chanceToriel, chanceSans, chancePapyrus, chanceNapstablook, chanceUndyne, chanceFlowey, chanceFrisk, chanceChara, chanceMettaton, chanceAsgore, chanceAsriel];
        var totalPontos = 0;

        for (var i = 0; i < chances.length; i++) {
            totalPontos += chances[i];
        }

        fetch("/quizPersonalidade/registrar", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                chanceToriel: (chanceToriel * 100 / totalPontos).toFixed(2),
                chanceSans: (chanceSans * 100 / totalPontos).toFixed(2),
                chancePapyrus: (chancePapyrus * 100 / totalPontos).toFixed(2),
                chanceNapstablook: (chanceNapstablook * 100 / totalPontos).toFixed(2),
                chanceUndyne: (chanceUndyne * 100 / totalPontos).toFixed(2),
                chanceFlowey: (chanceFlowey * 100 / totalPontos).toFixed(2),
                chanceFrisk: (chanceFrisk * 100 / totalPontos).toFixed(2),
                chanceChara: (chanceChara * 100 / totalPontos).toFixed(2),
                chanceMettaton: (chanceMettaton * 100 / totalPontos).toFixed(2),
                chanceAsgore: (chanceAsgore * 100 / totalPontos).toFixed(2),
                chanceAsriel: (chanceAsriel * 100 / totalPontos).toFixed(2),
                idUsuario: idUsuario
            })
        })
            .then(res => res.text())
            .then(msg => {
                console.log(msg);
            })
            .catch(err => {
                console.error("Erro ao enviar resultado:", err);
            });
    }

