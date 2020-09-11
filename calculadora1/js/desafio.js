let = mes = 0
//Enquanto mês menor que um ou maior que 12
//Solicita ao usuário para digitar o valor
//Ou mês não é um número
while(mes < 1 || mes > 12 || isNaN(mes)){

   mes = parseInt(
       prompt("Digite um número de 1 a 12 correspondente ao mês do ano")
       );
}
 
//Array meses com propriedades de 1 a 12
const meses = {
   1:"Janeiro",
   2:"Fevereiro",
   3:"Março",
   4:"Abril",
   5:"Maio",
   6:"Junho",
   7:"Julho",
   8:"Agosto",
   9:"Setembro",
   10:"Outubro",
   11:"Novembro",
   12:"Dezembro"
};
 
//Acessando o mês do array meses
alert("Mês : " + meses[mes]);

switch(mes) {
    case 12:
    case 1:
    case 2:
        alert("Verão");
        break;
    case 3:
    case 4:
    case 5:
        alert("Outono");
        break;
    case 6:
    case 7:
    case 8:
        alert("Inverno");
    case 9:
    case 10:
    case 11:
        alert("Primavera");
        break;
}