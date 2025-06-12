   function tocarAudio() {
        document.getElementById('audio').play();
    }

    function audioAcerto() {
        document.getElementById('audioAcerto').play();
    }

    function audioErro() {
        document.getElementById('audioErro').play();
    }

    function audioCheer() {
        document.getElementById('audioCheer').play();
    }

    var foto_usuario = sessionStorage.FOTO_PERFIL;
    b_usuario.innerHTML = sessionStorage.NOME_USUARIO;
    fotoPerfil.innerHTML = `<img src="${foto_usuario}" style=" object-fit: cover; border-radius: 15px; border: white solid 3px;">`;

    var idUsuario = sessionStorage.ID_USUARIO;

    var erros = 0;
    var acertos = 0;
    var nPergunta = 0;

    var pergunta1 = ` 
        <h1>1º Pergunta: <br>
         Qual o nome da flor falante que você encontra no início do jogo?</h1>

     <br>

         <div class="pergunta">
                    <button onclick="acertos++, certo = true, resultadoPergunta()">Flowey</button>

                    <button onclick="erros++, certo = false, resultadoPergunta()">Daisy</button>

                    <button onclick="erros++, certo = false, resultadoPergunta()">Petunia</button>

                    <button onclick="erros++, certo = false, resultadoPergunta()">Asriel</button>
         </div>`

    var pergunta2 = `
        <h1>2º Pergunta: <br>
         Qual o nome completo do rei?</h1>
    
     <br>
    
         <div class="pergunta">
                 <button onclick="erros++, certo = false, resultadoPergunta()">King Goatfather</button>

                 <button onclick="erros++, certo = false, resultadoPergunta()">Dreemurr Asgore</button>

                 <button onclick="acertos++, certo = true, resultadoPergunta()">Asgore Dreemurr</button>

                 <button onclick="erros++, certo = false, resultadoPergunta()">Asriel Dreemurr</button>
         </div>`

    var pergunta3 = `
        <h1>3º Pergunta: <br>
        Qual é o instrumento musical usado para tocar a música da caixa de música na casa de Napstablook(em Waterfall)?</h1>

     <br>

         <div class="pergunta">
                 <button onclick="erros++, certo = false, resultadoPergunta()">Violino</button>

                 <button onclick="acertos++, certo = true, resultadoPergunta()">Piano</button>

                 <button onclick="erros++, certo = false, resultadoPergunta()">Flauta</button>

                 <button onclick="erros++, certo = false, resultadoPergunta()">Guitarra</button>
         </div>`

    var pergunta4 = `
        <h1>4º Pergunta: <br>
        Quantas almas humanas são mostradas no jogo?</h1>

      <br>

         <div class="pergunta">
                  <button onclick="erros++, certo = false, resultadoPergunta()">1</button>

                  <button onclick="erros++, certo = false, resultadoPergunta()">8</button>

                  <button onclick="acertos++, certo = true, resultadoPergunta()">7</button>

                  <button onclick="erros++, certo = false, resultadoPergunta()">3</button>

         </div>`

    var pergunta5 = `
        <h1>5º Pergunta: <br>
        Quem é o chefe final da Rota Genocida?</h1>

     <br>

        <div class="pergunta">
                 <button onclick="erros++, certo = false, resultadoPergunta()">Undyne the Undying</button>

                 <button onclick="erros++, certo = false, resultadoPergunta()">Asgore</button>

                 <button onclick="acertos++, certo = true, resultadoPergunta()">Sans</button>

                 <button onclick="erros++, certo = false, resultadoPergunta()">Mettaton EX</button>

         </div>`



    var pergunta6 = `
        <h1>6º Pergunta: <br>
        Qual é a área do jogo que muda de acordo com o console/plataforma?</h1>

    <br>

       <div class="pergunta">
                 <button onclick="erros++, certo = false, resultadoPergunta()">O Último corredor</button>

                 <button onclick="acertos++, certo = true, resultadoPergunta()"> Armário debaixo da pia do Papyrus</button>

                 <button onclick="erros++, certo = false, resultadoPergunta()">Atrás da casa do Sans</button>

                 <button onclick="erros++, certo = false, resultadoPergunta()">O True lab</button>
        </div>`



    var pergunta7 = `
        <h1>7º Pergunta: <br>
        Qual é o nome do cão que rouba o osso do Papyrus e aparece frequentemente em situações engraçadas?</h1>

     <br>

       <div class="pergunta">
                <button onclick="erros++, certo = false, resultadoPergunta()">Toby</button>

                <button onclick="acertos++, certo = true, resultadoPergunta()">Annoying Dog</button>

                <button onclick="erros++, certo = false, resultadoPergunta()">Barky</button>

                <button onclick="erros++, certo = false, resultadoPergunta()">Snowdog</button>
        </div>`



    var pergunta8 = `
        <h1>8º Pergunta: <br>
        Em quem a doutora alphys tem um crush?</h1>

     <br>

         <div class="pergunta">
                <button onclick="acertos++, certo = true, resultadoPergunta()">Undyne</button>

                <button onclick="erros++, certo = false, resultadoPergunta()">Mettaton</button>

                <button onclick="erros++, certo = false, resultadoPergunta()">Frisk</button>

                <button onclick="erros++, certo = false, resultadoPergunta()">Toriel</button>                 
         </div>`



    var pergunta9 = `
        <h1>9º Pergunta: <br>
        Qual dessas áreas você visita antes da Hotland?</h1>

     <br>

         <div class="pergunta">
                <button onclick="erros++, certo = false, resultadoPergunta()">Core</button>

                <button onclick="acertos++, certo = true, resultadoPergunta()">Waterfall</button>

                <button onclick="erros++, certo = false, resultadoPergunta()">New Home</button>

                <button onclick="erros++, certo = false, resultadoPergunta()">MTT Resort</button>
          </div>`



    var pergunta10 = `
        <h1>10º Pergunta: <br>
        Se você quer fazer o final True Pacifist, o que você tem que fazer antes de derrotar Asgore?</h1>

     <br>

        <div class="pergunta">
                 <button onclick="erros++, certo = false, resultadoPergunta2()">Reset o jogo</button>

                 <button onclick="erros++, certo = false, resultadoPergunta2()">Nada, o jogo termina</button>

                 <button onclick="acertos++, certo = true, resultadoPergunta2()">Voltar e fazer amizade com Undyne, Papyrus e Alphys</button>

                 <button onclick="erros++, certo = false, resultadoPergunta2()">Matar Flowey</button>
           </div>`






    var rCerta = ["Você foi muito sortudo agora!", "Por Pouco você não erra.", "A próxima será mais difícil!", "Parabéns, mais uma pra conta"];

    var rErrada = ["Não foi dessa vez, volte quando tiver estudado!", "Continue errando, o publico ama!", "Mais sorte na próxima vez.", "Como você errou isso?!"];



    function resultadoPergunta() {
        if (certo == true) {
            audioAcerto();

            var random = (Math.random(rCerta.length) * 3).toFixed(0);

            var randomAnswer = rCerta[random];

            div_contentQuiz.innerHTML = `       
        <h1><span style="color: green;">&#x2713;</span>Resposta Correta<span style="color: green;">&#x2713;</span></h1>
        <br>
             <h1>${randomAnswer}</h1>
        <div class="pergunta">
                 <button onclick="nPergunta++, rodarQuiz()">Ir para próxima pergunta</button>
        </div>`

        } else if (certo == false) {
            audioErro();

            var random = (Math.random(rErrada.length) * 3).toFixed(0);

            var randomAnswer = rErrada[random];


            div_contentQuiz.innerHTML = `       
        <h1><span style="color: red;">&times;</span>Resposta errada<span style="color: red;">&times;</span></h1>
        <br>
             <h1>${randomAnswer}</h1>
        <div class="pergunta">
                 <button onclick="nPergunta++, rodarQuiz()">Ir para próxima pergunta</button>
        </div>`
        }
    }


    function resultadoPergunta2() {
        if (certo == true) {
            audioAcerto();

            var random = (Math.random(rCerta.length) * 3).toFixed(0);

            var randomAnswer = rCerta[random];

            div_contentQuiz.innerHTML = `       
        <h1><span style="color: green;">&#x2713;</span>Resposta Correta<span style="color: green;">&#x2713;</span></h1>
        <br>
             <h1>${randomAnswer}</h1>
        <div class="pergunta">
                 <button onclick="finalizarQuiz()">Finalizar Quiz</button>
        </div>`

        } else if (certo == false) {
            audioErro();

            var random = (Math.random(rErrada.length) * 3).toFixed(0);

            var randomAnswer = rErrada[random];


            div_contentQuiz.innerHTML = `       
        <h1><span style="color: red;">&times;</span>Resposta errada<span style="color: red;">&times;</span></h1>
        <br>
             <h1>${randomAnswer}</h1>
        <div class="pergunta">
                 <button onclick="finalizarQuiz()">Finalizar Quiz</button>
        </div>`
        }
    }


    function rodarQuiz() {
        const perguntas = [pergunta1, pergunta2, pergunta3, pergunta4, pergunta5, pergunta6, pergunta7, pergunta8, pergunta9, pergunta10]
        div_contentQuiz.innerHTML = `${perguntas[nPergunta]}`
    }

    function tirarConfetti() {
        document.getElementById('confetti').style.display = "none";
    }


    function finalizarQuiz() {
        Cadastrar();

        if (acertos <= 5) {
            div_contentQuiz.innerHTML = `
                    <h1>Seu resultado foi...</h1>
                        <h1 style="font-size: 80px; color: Red;">Ruim</h1>
                        <h1>Volte quando ter mais certeza de suas respostas</h1>
                        <h2>${acertos}/10</h2>
            
                    <div class="grafico">
                        <canvas id="graficoQuiz"></canvas>
                    </div>

                    <br>
                     <div class = "botaoBlockQuiz">
                    <button onclick="window.location = 'minigames.html'">Voltar para minigames</button><br>
                    <button onclick="window.location = 'mttgameshow.html'">Refazer o quiz</button>
                    </div>`

            const ctx = document.getElementById('graficoQuiz');

            new Chart(ctx, {
                type: 'pie',
                data: {
                    labels:
                        ['Acertos', 'Erros'],
                    datasets: [{
                        label: 'Quantidade',
                        backgroundColor: [
                            '#016d01',
                            '#8e0000'
                        ],
                        data: [acertos, erros],
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



        } else if (acertos > 5 && acertos <= 8) {
            div_contentQuiz.innerHTML = `
                    <h1>Seu resultado foi...</h1>
                        <h1 style="font-size: 80px; color: yellow;">Razoável</h1>
                        <h1>Teve um bom desempenho, mas da pra melhorar!</h1>
                        <h2>${acertos}/10</h2>
                

            
                    <div class="grafico">
                        <canvas id="graficoQuiz"></canvas>
                    </div>

                    <br>
                    <div class = "botaoBlockQuiz">
                    <button onclick="window.location = 'minigames.html'">Voltar para minigames</button><br>
                    <button onclick="window.location = 'mttgameshow.html'">Refazer o quiz</button>
                    </div>`

            const ctx = document.getElementById('graficoQuiz');

            new Chart(ctx, {
                type: 'pie',
                data: {
                    labels:
                        ['Acertos', 'Erros'],
                    datasets: [{
                        label: 'Quantidade',
                        backgroundColor: [
                            '#016d01',
                            '#8e0000'
                        ],
                        data: [acertos, erros],
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

        } else if (acertos > 8) {
            audioCheer();
            mainQuiz.innerHTML += `<img id="confetti" class="confetti" src="/assets/img/confetti.gif" alt="">`

            setInterval(tirarConfetti, 10000)


            div_contentQuiz.innerHTML = `
                    <h1>Seu resultado foi...</h1>
                        <h1 style="font-size: 80px; color: #00dc00;">Ótimo!</h1>
                        <h1>Simplesmente incrível! E a plateia vai á loucura!</h1>
                        <h2>${acertos}/10</h2>
            
                    <div class="grafico">
                        <canvas id="graficoQuiz"></canvas>
                    </div>
                    <br>
                    <div class = "botaoBlockQuiz">
                    <button onclick="window.location = 'minigames.html'">Voltar para minigames</button><br>
                    <button onclick="window.location = 'mttgameshow.html'">Refazer o quiz</button>
                    </div>`


            const ctx = document.getElementById('graficoQuiz');

            new Chart(ctx, {
                type: 'pie',
                data: {
                    labels:
                        ['Acertos', 'Erros'],
                    datasets: [{
                        label: 'Quantidade',
                        backgroundColor: [
                            '#00dc00',
                            '#8e0000'
                        ],
                        data: [acertos, erros],
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
    }


    function Cadastrar() {
        fetch("/MTTgameshow/registrar", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                acertos: acertos,
                erros: erros,
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
