const prompt = require("prompt-sync")();

let quantidade = parseInt(prompt("Quantos números você deseja inserir?: "));

let numeros = [];
for (let i = 0; i < quantidade; i++) {
    let numero = parseFloat(prompt(`Digite o número ${i + 1}: `));
    numeros.push(numero);
}

let numerosPares = numeros.filter(numero => numero % 2 == 0);
console.log("Números pares: ");
console.log(numerosPares);