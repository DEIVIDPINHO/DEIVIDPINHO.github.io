let calculaTotal = 0;
let armazenado = "0";
let operadoAnterior;
const visor = document.querySelector('.screen');

function iniciar() {
    //Adicionando a escuta aos eventos de clique nos botões
    document
        .querySelector('.calc-buttons')
        .addEventListener('click', function(evento){
            //alert(`Botão Clicado: ${evento.target.innerText}`);
            botaoClicado(evento.target.innerText);
        });
 }
  
function botaoClicado(valor) {
    //Se não é um número
    if(isNaN(parseInt(valor))) {
        manipularSimbolo(valor);
    }else{
        manipularNumero(valor);
    }
    renderizar(); //Escrever na tela
}
 
function manipularNumero(valor) {
    if(armazenado === "0") {
        armazenado = valor;
    }else {
        //Concatenar os números que aparecem na tela
        //Abaixo de 12 caracteres
        if(visor.innerText.length <= 12 )
            armazenado += valor;
    }
}

function manipularSimbolo(valor) {
    switch(valor){
        case "C":
            armazenado = "0";//String que aparece na tela
            calculaTotal = 0;//Valor numérico a ser calculado
            break;
        case "=":
            if(operadoAnterior === null)
                return
            executarOperacao(parseInt(armazenado));
            operadorAnterior = null;
            armazenado = +calculaTotal;
            calculaTotal = 0;
            break;
        case "←":
            if(armazenado.length === 1){
                armazenado = "0";
            }else{
                //Removendo um caractere
                armazenado = armazenado.substring(0,armazenado.length-1)
            }
            break;
        case "÷":
        case "×":
        case "−":
        case "+":
            manipularMatematica(valor);
            break;
    }
}

function manipularMatematica(valor) {
    if(armazenado === '0'){
        //faz nada
        return;
    }
    const inteiroArmazenado = parseInt(armazenado);
    if(calculaTotal === 0){
        calculaTotal = inteiroArmazenado;
    }else{
        executarOperacao(inteiroArmazenado);
    }
  
    operadoAnterior = valor;
    //Zerar o que está na tela
    armazenado = "0";
}


function executarOperacao(inteiroArmazenado) {
    switch(operadoAnterior){
        case "÷":
            calculaTotal /= inteiroArmazenado;
            break;
        case "×":
            calculaTotal *= inteiroArmazenado;
            break;
        case "−":
            calculaTotal -= inteiroArmazenado;
            break;
        case "+":
            calculaTotal += inteiroArmazenado;
            break;
    }
}

function renderizar() {
    visor.innerText = armazenado;
}

//aqui é onde tudo começa!
//chamada da função iniciar que se
//encarregará de chamar todas as outras
iniciar();