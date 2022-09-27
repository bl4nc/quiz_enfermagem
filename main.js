let progresso = 1;
let qtdCorretas = 0;
let n_questao = 0
// Máximo de 3 questões faceis
let qtdQuestoesFaceis = 0;
// Máximo de 4 questões medias
let qtdQuestoesMedias = 0;
// Máximo de 3 questões dificeis
let qtdQuestoesDificeis = 0;

const perguntas = [{
    nome: "Qual organela responsável pela digestão intracelular?",
    resposta: "Lisossomos.",
    backgroundColor: "",
    options: [
        "Ribossomo.",
        "Complexo de Golgi.",
        "Lisossomos.",
        "Centríolos."
    ],
    notificaoRespostaCerta: `
                    <strong>Alternativa 3 correta</strong>
                `,
    temRespostaCorreta: true,
    possuiCampoDigitacao: false
},
{
    nome: "Uma das causas da infertilidade masculina é a teratospermia, uma alteração na morfologia dos espermatozoides que passam a ter a cabeça redonda, não havendo a formação do acrossomo que é uma vesícula repleta de enzimas digestivas localizada na cabeça do espermatozoide, sendo essencial à sua penetração no ovócito para a fertilização. A organela citoplasmática que produz o acrossomo é denominada?",
    resposta: "Complexo de Golgi ou Complexo golgiense.",
    backgroundColor: "",
    options: [
        "Complexo de Golgi ou Complexo golgiense.",
        "Mitocôndria.",
        "Retículo endoplasmático granuloso.",
        "Retículo endoplasmático liso."
    ],
    notificaoRespostaCerta: `
        <strong>Alternativa 1 correta</strong>                
        `,
    temRespostaCorreta: true,
    possuiCampoDigitacao: false
},
{
    nome: "Qual o nome do processo executado pelas células do corpo humano, processo este que ocorre no interior das mitocôndrias, onde as substâncias orgânicas reagem com gás oxigênio liberando energia para os processos vitais do corpo?",
    resposta: "Respiração celular.",
    backgroundColor: "",
    options: [
        "Fotossíntese.",
        "Respiração celular.",
        "Digestão.",
        "Circulação."
    ],
    notificaoRespostaCerta: `
        <strong>Alternativa 2 correta</strong>                
        `,
    temRespostaCorreta: true,
    possuiCampoDigitacao: false
},
{
    nome: "Qual organela citoplasmática é bem desenvolvida em células do fígado por apresentar um importante papel na desintoxicação de substâncias nocivas e tóxicas ao organismo?",
    resposta: "Retículo endoplasmático liso.",
    backgroundColor: "",
    options: [
        "Complexo de Golgi.",
        "Vacúolos.",
        "Retículo endoplasmático liso.",
        "Retículo endoplasmático rugoso. "
    ],
    notificaoRespostaCerta: `
        <strong>Alternativa 3 correta</strong>                
        `,
    temRespostaCorreta: true,
    possuiCampoDigitacao: false
},
{
    nome: "Qual estrutura tem como função síntese de proteínas e pode ser encontrada tanto em células procariontes quanto em células eucariontes?",
    resposta: "Ribossomos.",
    backgroundColor: "",
    options: [
        "Mitocôndria.",
        "Ribossomos.",
        "Lisossomos.",
        "Vacúolo. "
    ],
    notificaoRespostaCerta: `
        <strong>Alternativa 2 correta</strong>                
        `,
    temRespostaCorreta: true,
    possuiCampoDigitacao: false
},
{
    nome: "A fotossíntese é um processo que acontece no interior de qual organela?",
    resposta: "Cloroplastos.",
    backgroundColor: "",
    options: [
        "Cloroplastos.",
        "Citoplasma.",
        "Mitocôndria.",
        "Núcleo. "
    ],
    notificaoRespostaCerta: `
        <strong>Alternativa 1 correta</strong>                
        `,
    temRespostaCorreta: true,
    possuiCampoDigitacao: false
},
{
    nome: "Qual organela possui ribossomos aderidos e está relacionada a produção de proteínas?",
    resposta: "Retículo endoplasmático rugoso.",
    backgroundColor: "",
    options: [
        "Mitocôndria.",
        "Núcleo.",
        "Retículo endoplasmático rugoso.",
        "Complexo de Golgi."
    ],
    notificaoRespostaCerta: `
        <strong>Alternativa 3 correta</strong>                
        `,
    temRespostaCorreta: true,
    possuiCampoDigitacao: false
},
{
    nome: "Qual organela citoplasmática é constituída por túbulos de proteínas e participa da formação de cílios e flagelos?",
    resposta: "Centríolos.",
    backgroundColor: "",
    options: [
        "Centríolos.",
        "Citoesqueleto.",
        "Citoplasma.",
        "Vacúolo."
    ],
    notificaoRespostaCerta: `
        <strong>Alternativa 1 correta</strong>                
        `,
    temRespostaCorreta: true,
    possuiCampoDigitacao: false
},
{
    nome: "Os vacúolos são estruturas típicas de células vegetais, qual a função dessa organela?",
    resposta: "Armazenar água e outras substâncias, como sais minerais e aminoácidos.",
    backgroundColor: "",
    options: [
        "Produzir moléculas de ATP.",
        "Síntese de proteínas.",
        "Armazenar água e outras substâncias, como sais minerais e aminoácidos.",
        "Síntese de lipídios."
    ],
    notificaoRespostaCerta: `
        <strong>Alternativa 3 correta</strong>                
        `,
    temRespostaCorreta: true,
    possuiCampoDigitacao: false
},
{
    nome: "Que organela é responsável pelo armazenamento de enzimas que catalisam o peróxido de hidrogênio, mais conhecido como água oxigenada (H2O2)?",
    resposta: "Peroxissomo.",
    backgroundColor: "",
    options: [
        "ATP.",
        "Núcleo.",
        "Citoplasma.",
        "Peroxissomo."
    ],
    notificaoRespostaCerta: `
        <strong>Alternativa 4 correta</strong>                
        `,
    temRespostaCorreta: true,
    possuiCampoDigitacao: false
},
{
    nome: "Qual a principal função da Membrana plasmática?",
    resposta: "Delimitar o conteúdo intracelular e extracelular.",
    backgroundColor: "",
    options: [
        "Delimitar o conteúdo intracelular e extracelular.",
        "Produzir ATP.",
        "Armazenar substâncias.",
        "Produzir lipídios."
    ],
    notificaoRespostaCerta: `
        <strong>Alternativa 1 correta</strong>                
        `,
    temRespostaCorreta: true,
    possuiCampoDigitacao: false
},
{
    nome: "Qual estrutura celular responsável por armazenar as informações genéticas?",
    resposta: "Núcleo.",
    backgroundColor: "",
    options: [
        "Parede Celular.",
        "Vacúolo.",
        "Núcleo.",
        "Lisossomos."
    ],
    notificaoRespostaCerta: `
        <strong>Alternativa 3 correta</strong>                
        `,
    temRespostaCorreta: true,
    possuiCampoDigitacao: false
},

{
    nome: "Quais organelas possuem DNA próprio?",
    resposta: "Mitocôndria e Cloroplastos.",
    backgroundColor: "",
    options: [
        "Ribossomo e Retículo endoplasmático.",
        "Mitocôndria e Cloroplastos.",
        "Lisossomos e Peroxissomos.",
        "Complexo de Golgi e Centríolo."
    ],
    notificaoRespostaCerta: `
        <strong>Alternativa 2 correta</strong>                
        `,
    temRespostaCorreta: true,
    possuiCampoDigitacao: false
},

];

let respostasUsuario = [];

class Grain {
    constructor(el) {
        /**
         * Options
         * Increase the pattern size if visible pattern
         */
        this.patternSize = 150;
        this.patternScaleX = 1;
        this.patternScaleY = 1;
        this.patternRefreshInterval = 3; // 8
        this.patternAlpha = 13; // int between 0 and 255,

        /**
         * Create canvas
         */
        this.canvas = el;
        this.ctx = this.canvas.getContext('2d');
        this.ctx.scale(this.patternScaleX, this.patternScaleY);

        /**
         * Create a canvas that will be used to generate grain and used as a
         * pattern on the main canvas.
         */
        this.patternCanvas = document.createElement('canvas');
        this.patternCanvas.width = this.patternSize;
        this.patternCanvas.height = this.patternSize;
        this.patternCtx = this.patternCanvas.getContext('2d');
        this.patternData = this.patternCtx.createImageData(this.patternSize, this.patternSize);
        this.patternPixelDataLength = this.patternSize * this.patternSize * 4; // rgba = 4

        /**
         * Prebind prototype function, so later its easier to user
         */
        this.resize = this.resize.bind(this);
        this.loop = this.loop.bind(this);

        this.frame = 0;

        window.addEventListener('resize', this.resize);
        this.resize();

        window.requestAnimationFrame(this.loop);
    }

    resize() {
        this.canvas.width = window.innerWidth * devicePixelRatio;
        this.canvas.height = window.innerHeight * devicePixelRatio;
    }

    update() {
        const { patternPixelDataLength, patternData, patternAlpha, patternCtx } = this;

        // put a random shade of gray into every pixel of the pattern
        for (let i = 0; i < patternPixelDataLength; i += 4) {
            // const value = (Math.random() * 255) | 0;
            const value = Math.random() * 255;

            patternData.data[i] = value;
            patternData.data[i + 1] = value;
            patternData.data[i + 2] = value;
            patternData.data[i + 3] = patternAlpha;
        }

        patternCtx.putImageData(patternData, 0, 0);
    }

    draw() {
        const { ctx, patternCanvas, canvas, viewHeight } = this;
        const { width, height } = canvas;

        // clear canvas
        ctx.clearRect(0, 0, width, height);

        // fill the canvas using the pattern
        ctx.fillStyle = ctx.createPattern(patternCanvas, 'repeat');
        ctx.fillRect(0, 0, width, height);
    }

    loop() {
        // only update grain every n frames
        const shouldDraw = ++this.frame % this.patternRefreshInterval === 0;
        if (shouldDraw) {
            this.update();
            this.draw();
        }

        window.requestAnimationFrame(this.loop);
    }
}

setTimeout(() => {
    document.querySelector(".loader p").style.display = "";
}, 1500);

document.querySelector("#iniciar-quiz").addEventListener("click", function (e) {
    let nextScene = $('.perguntas');
    let telaInicial = document.querySelector(".tela-inicial");

    nextScene.fadeIn();
    telaInicial.classList.add("loaded");

    carregaQuestao(n_questao);
});

function shuffleArray(arr) {
    // Loop em todos os elementos
    for (let i = arr.length - 1; i > 0; i--) {
        // Escolhendo elemento aleatório
        const j = Math.floor(Math.random() * (i + 1));
        // Reposicionando elemento
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    // Retornando array com aleatoriedade
    return arr;
}

function msg(icon, title, text) {
    Swal.fire({
        icon: `${icon}`,
        title: `${title}`,
        html: `${text}`
    });
}

function msgWithConfirm(icon, title, text, buttonText, callback) {
    Swal.fire({
        icon: icon,
        title: title,
        html: text,
        confirmButtonText: buttonText
    }).then((result) => {
        callback(result);
    })
}

function request(url, headers, method, callback, body = '') {
    if (body == '') {
        fetch(url, {
            headers: headers,
            method: method
        })
            .then(response => response.json())
            .then(data => {
                callback(data);
            });
    } else {
        fetch(url, {
            headers: headers,
            method: method,
            body: JSON.stringify(body)
        })
            .then(response => response.json())
            .then(data => {
                callback(data);
            });
    }
}

function carregaQuestao(n_questao) {
    let questionText = document.querySelector("#question__text");
    let respostasArea = document.querySelector(".respostas");
    let breadCrumbs = document.querySelectorAll(".perguntas-breadcrumbs .pergunta-breadcrumb");
    if (progresso == 14) {
        // Limpa área de respostas
        respostasArea.innerHTML = ``;
        // Limpa área de questões
        document.querySelector("#area-perguntas").innerHTML = ``;
        finalizarQuiz();
    } else {
        // Limpa área de respostas
        respostasArea.innerHTML = ``;

        // Carrega na tela a questão
        questionText.innerHTML = perguntas[n_questao].nome;

        perguntas[n_questao].options.forEach(pergunta => {
            // Marca resposta certa
            respostasArea.innerHTML += `<div class="resposta" data-question-id="${n_questao}" onclick="verificaResposta(this)">${pergunta}</div>`;

        });

        // Passa para o próximo breadcrumb
        for (index = 0; index < progresso; index++) {
            breadCrumbs[index].classList.add("active");
        }
    }

}

function verificaResposta(element) {
    let perguntaId = Number(element.getAttribute("data-question-id"));
    let resposta = element.innerText;
    n_questao++

    if (perguntas[perguntaId].temRespostaCorreta) {
        if (perguntas[perguntaId].resposta == resposta) {
            // Salva resposta do usuário
            respostasUsuario.push({
                pergunta: perguntas[perguntaId].nome,
                pergunta_id: perguntaId + 1,
                acertou: 1,
                resposta: resposta
            });

            runConfettiRain('confetti');

            msgWithConfirm('success', 'Parabéns!', 'Você acertou!', 'Prosseguir', (result) => {
                // Carrega a próxima questão
                carregaQuestao(n_questao);

                qtdCorretas++;

                // Limpa chuva de confete
                document.querySelector("#confetti-wrapper").innerHTML = ``;
            });
        } else {
            // Salva resposta do usuário
            respostasUsuario.push({
                pergunta: perguntas[perguntaId].nome,
                pergunta_id: perguntaId + 1,
                acertou: 0,
                resposta: resposta
            });

            msgWithConfirm('error', 'Resposta incorreta', `${perguntas[perguntaId].notificaoRespostaCerta}.`, 'Continuar', (result) => {
                // Carrega a próxima questão
                carregaQuestao(n_questao);
            });
        }
    } else {
        // Salva resposta do usuário
        respostasUsuario.push({
            pergunta: perguntas[perguntaId].nome,
            pergunta_id: perguntaId + 1,
            acertou: 1,
            resposta: resposta
        });

        // Carrega a próxima questão
        n_questao++
        carregaQuestao(n_questao);
    }
    progresso++;
}

function finalizarQuiz() {
    let headers = {
        'Content-Type': 'application/json'
    };

    $("#modal-final-quiz").modal('toggle');

    let mensagemFinal = document.querySelector("#modal-quiz-finalizado-content p");

    runConfettiRain('confetti-final');

    let porc = Math.floor((100 / 13) * qtdCorretas)

    mensagemFinal.innerHTML = `
        Parabéns, você finalizou o quiz. <br>
        Você acertou ${porc}% das questões.
    `;
}

function runConfettiRain(className) {
    for (i = 0; i < 100; i++) {
        // Random rotation
        var randomRotation = Math.floor(Math.random() * 360);
        // Random Scale
        var randomScale = Math.random() * 1;
        // Random width & height between 0 and viewport
        var randomWidth = Math.floor(Math.random() * Math.max(document.documentElement.clientWidth, window.innerWidth || 0));
        var randomHeight = Math.floor(Math.random() * Math.max(document.documentElement.clientHeight, window.innerHeight || 500));

        // Random animation-delay
        var randomAnimationDelay = Math.floor(Math.random() * 15);

        // Random colors
        var colors = ['#0CD977', '#FF1C1C', '#FF93DE', '#5767ED', '#FFC61C', '#8497B0']
        var randomColor = colors[Math.floor(Math.random() * colors.length)];

        // Create confetti piece
        var confetti = document.createElement('div');
        confetti.className = `${className}`;
        confetti.style.top = randomHeight + 'px';
        confetti.style.right = randomWidth + 'px';
        confetti.style.backgroundColor = randomColor;
        // confetti.style.transform='scale(' + randomScale + ')';
        confetti.style.obacity = randomScale;
        confetti.style.transform = 'skew(15deg) rotate(' + randomRotation + 'deg)';
        confetti.style.animationDelay = randomAnimationDelay + 's';
        document.getElementById("confetti-wrapper").appendChild(confetti);
    }
}

function gerarRelatorio() {
    let dataInicial = document.querySelector("#data_inicial").value;
    let dataFinal = document.querySelector("#data_final").value;
    let grupo = document.querySelector("#grupo").value;

    window.open(`./api/relatorio/excel?data_inicial=${dataInicial}&data_final=${dataFinal}&grupo=${grupo}`, `_target`);
}

/**
 * Initiate Grain
 */
const elCanvas = document.querySelector('.grain');
const grain = new Grain(elCanvas);