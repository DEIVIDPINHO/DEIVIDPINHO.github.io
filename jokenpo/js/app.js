console.log('Jogando Jokenpô!');

let placarJogador = 0;
let placarComputador = 0;

//cache do DOM (Document Object Model)
//ligar os elementos HTML em variáveis Javasrcipt
const placarJogadorSpan = document.querySelector('#placar-jogador');
const placarComputadorSpan = document.querySelector('#placar-computador');
const resultadoP = document.querySelector('.resultado > p');
const pedraButton = document.querySelector('#pedra');
const papelButton = document.querySelector('#papel');
const tesouraButton = document.querySelector('#tesoura');

//Pegar a jogada do computador
function getEscolhaComputador() {
    const escolhasDoComputador  = ['pedra','papel','tesoura'];
    //Gerando um número aleatório entre 0 e 2   
    const numeroAleatorio = Math.floor(Math.random() * 3);
    return escolhasDoComputador[numeroAleatorio];
}

//Venceu, perdeu e empatou
function venceu(escolhaDoComputador,escolhaDoJogador) {
    //Incrementar o placar
    placarJogador++;
    placarJogadorSpan.innerText = placarJogador;
    resultadoP.innerText = `${escolhaDoJogador} vence ${escolhaDoComputador}. Você venceu!`;
}
  
 function perdeu(escolhaDoComputador,escolhaDoJogador) {
    //Incrementar o placar
    placarComputador++;
    placarComputadorSpan.innerText = placarComputador;
    resultadoP.innerText = `${escolhaDoJogador} perde para ${escolhaDoComputador}. Você perdeu!`;
}
  
 function empatou(escolhaDoComputador,escolhaDoJogador) {
    resultadoP.innerText = `${escolhaDoJogador} empata com ${escolhaDoComputador}. Empatou!`;
}
 


//Comparando as jogadas
function jogo(escolhaDoJogador) {
    const escolhaDoComputador = getEscolhaComputador();
    console.log(`Escolha do Jogador: ${escolhaDoJogador}`);
    console.log(`Escolha do Computador: ${escolhaDoComputador}`);
    //console.log(`Escolhas: ${escolhaDoComputador+escolhaDoJogador}`);
    switch(escolhaDoComputador+escolhaDoJogador){
        case 'pedraTesoura':
        case 'papelPedra':
        case 'tesouraPapel':
            console.log('Perdeu!');
            perdeu(escolhaDoComputador,escolhaDoJogador);
            break;
        case 'tesouraPedra':
        case 'pedraPapel':
        case 'papelTesoura':
            console.log('Venceu!');
            venceu(escolhaDoComputador,escolhaDoJogador);
            break;
        case 'tesouraTesoura':
        case 'pedraPedra':
        case 'papelPapel':
            console.log('Empate');
            empatou(escolhaDoComputador,escolhaDoJogador);
            break;
    }
}
 

//função principal da aplicação
function app() {
    //adicionando escutas de evento click
    pedraButton.addEventListener('click', function(){
        console.log('Clicou na pedra!')
        jogo('Pedra');
    });
    papelButton.addEventListener('click', function(){
        console.log('Clicou no papel!')
        jogo('Papel');
    });

    tesouraButton.addEventListener('click', function(){
        console.log('Clicou na tesoura!')
        jogo('Tesoura');
    });
}

//chamada da função
app();

