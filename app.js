console.log("Olá Mundo!!!");

let nome = "Vieira";
console.log(nome);
nome = "Quenga";
console.log(nome);

const valor = 10;
console.log(valor);

//parseFloat() ou Number() para valores numéricos
let total = 5 + parseInt("5");
console.log("O valor é " + total); //Template literal = 'O valor é ${total}'

let nota = 7.5;
if (nota >= 9){
    console.log('Excelente!');
} else if(nota >= 7){
    console.log('Bom!')
}
else {
    console.log('Vamos Estudar!')
}

let diaSemana = 3;
switch (diaSemana){
    case 1:
        console.log('Domingo');
        break;
    case 2:
        console.log('Segunda');
        break;
    case 3:
        console.log('Terça');
        break;
    default:
        console.log('Dia Inválido!');
}

for (let i=0; i<5; i++){
    console.log("Laço FOR: " + i);

}

let contador1 = 0;
while (contador1 < 5){
    console.log(`Laço WHILE: ${contador1}`);
    contador1++;
}

let contador2 = 0;
do {
    console.log("Laço DO WHILE: " + contador2);
    contador2++;
} while (contador2 < 5);

function somar (a, b){
    return a + b;
}

const soma = (a, b) => a + b;
console.log(soma(3,4));

const prompt = require('prompt-sync')()/*é de extrema importância ter o parentêses vazio*/;
nome = prompt("Digite o seu nome: ");
let idade = prompt("Digite sua idade: ");
console.log(`Nome: ${nome} - Idade: ${idade}`);