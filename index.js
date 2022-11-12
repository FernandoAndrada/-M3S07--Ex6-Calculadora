

let numero_um;
let numero_dois;
let soma;

var escolha_usuario = 
prompt("Escolha um numero: 1 - Soma; 2 - Subtração; 3 - Multiplicação; 4 - Divisão Real; 5 - Divisão Inteira; 6 - Potenciação; 7 - Encerra o programa;");

while(!(escolha_usuario == '7')){
switch(escolha_usuario){

    case '1' :
    alert ("você escolheu somar, digite dois números.");
    numero_um = parseFloat(prompt("Número 1:"));
    numero_dois = parseFloat(prompt ("Número dois:"));

    if((!numero_um || !numero_dois)){
    alert("Você não digitou um número, tente novamente!!")
    }else{
    soma = Number(numero_um) + Number(numero_dois)
    alert(`${numero_um} + ${numero_dois} = ${soma}`)
    }
    break;

    case '2' :
        alert ("você escolheu subtrair, digite dois números.");
    numero_um = parseFloat(prompt("Número 1:"))
    numero_dois = parseFloat(prompt ("Número dois:"))

    if((!numero_um || !numero_dois)){
        alert("Você não digitou um número, tente novamente!!")
        }else{
    alert(`${numero_um} - ${numero_dois} = ${numero_um - numero_dois}`)
        }

    break;

    case '3': 
    alert ("você escolheu Multiplicar, digite dois números.");
    numero_um = parseFloat(prompt("Número 1:"));
    numero_dois = parseFloat(prompt ("Número dois:"));

    if((!numero_um || !numero_dois)){
        alert("Você não digitou um número, tente novamente!!")
        }else{
    alert(`${numero_um} * ${numero_dois} = ${numero_um * numero_dois}`)
        }

    break;

    case '4':
        alert ("você escolheu Dividir, digite dois números.");
        numero_um = parseFloat(prompt("Número 1:"));
        numero_dois = parseFloat(prompt ("Número dois:"));

        if((!numero_um || !numero_dois)){
            alert("Você não digitou um número, tente novamente!!")
            }else{
        alert(`${numero_um} / ${numero_dois} = ${numero_um / numero_dois}`)
            }
        break;

    case '5':
        alert ("você escolheu fazer uma Divisão inteira, digite dois números.");
    numero_um = parseFloat(prompt("Número 1:"));
    numero_dois = parseFloat(prompt ("Número dois:"));
    if((!numero_um || !numero_dois)){
        alert("Você não digitou um número, tente novamente!!")
        }else{
    alert(`${numero_um} % ${numero_dois} = ${numero_um % numero_dois}`)
        }
    break;

    case '6':
        alert ("você escolheu a Potenciação, digite dois números.");
    numero_um = parseFloat(prompt("Número 1:"));
    numero_dois = parseFloat(prompt ("Número dois, potência a ser elevada:"));
    if((!numero_um || !numero_dois)){
        alert("Você não digitou um número, tente novamente!!")
        }else{
    alert(`${numero_um} ** ${numero_dois} = ${numero_um ** numero_dois}`)
        }
    break;

    default:
        alert("Opção Inválida, tente novamente!!!")
        

}
escolha_usuario = 
prompt("Escolha um numero: 1 - Soma; 2 - Subtração; 3 - Multiplicação; 4 - Divisão Real; 5 - Divisão Inteira; 6 - Potenciação; 7 - Encerra o programa;");

}
