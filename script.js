const modalidades = ["Ginástica", "Judô", "Surfe", "Vôlei"];

// 1. Coloque o número que represente o esporte do seu grupo (0, 1, 2 ou 3)
const escolha = 0; 

document.querySelector('body').style.backgroundImage = "url('img/"+modalidades[escolha]+".png')";
document.querySelector('title').textContent = "Missão Olímpica | "+modalidades[escolha];
document.querySelector('h1').innerHTML = "Missão Olímpica <br> "+modalidades[escolha];

const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

// 2. Variável com o nome pontos que inicia com 0
let pontos = 0;

function mostraPergunta(){ 
    if(atual >= perguntas[escolha].length){ 
        mostraResultado(); 
        return; 
    } 
    perguntaAtual = perguntas[escolha][atual]; 
    caixaPerguntas.textContent = perguntaAtual.enunciado; 
    caixaAlternativas.textContent = ""; 
    mostraAlternativas();
}

function mostraAlternativas(){ 
    for(const alternativa of perguntaAtual.alternativas){ 
        const botaoAlternativas = document.createElement("button"); 
        botaoAlternativas.textContent = alternativa.texto; 
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa)); 
        caixaAlternativas.appendChild(botaoAlternativas) 
    }
}

function respostaSelecionada(opcaoSelecionada){ 
    const afirmacao = opcaoSelecionada.afirmacao; 
    historiaFinal += afirmacao + " "; 
    atual++; 
    pontos += opcaoSelecionada.pontos; 
    console.log(pontos); 
    mostraPergunta();
}

function mostraResultado(){ 
    textoResultado.textContent = historiaFinal; 
    caixaPerguntas.textContent = "Resultado"; 
    caixaAlternativas.textContent = ""; 
    
    // 3. Chamando a função podiumMedalhas aqui
    podiumMedalhas(); 
}

// 4. Criação da função podiumMedalhas
function podiumMedalhas() {
    // Verifica a quantidade de pontos com condicionais
    if (pontos === 3) {
        caixaPrincipal.style.backgroundImage = "url('img/bronze.png')";
        caixaPerguntas.textContent = "Resultado da competição: 3 pontos é BRONZE!";
    } 
    else if (pontos === 4) {
        caixaPrincipal.style.backgroundImage = "url('img/prata.png')";
        caixaPerguntas.textContent = "Resultado da competição: 4 pontos é PRATA!";
    } 
    else if (pontos === 5) {
        caixaPrincipal.style.backgroundImage = "url('img/ouro.png')";
        caixaPerguntas.textContent = "Resultado da competição: 5 pontos é OURO!";
    } 
    else if (pontos < 3) {
        caixaPrincipal.style.backgroundImage = "url('img/perdeu.png')";
        caixaPerguntas.textContent = "Resultado da competição: PERDEU!";
    }
}

mostraPergunta();
