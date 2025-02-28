const prompt = require("prompt-sync")();

let quantidade = parseInt(prompt("Quantos números você deseja somar?: "));

let numeros = [];
for (let i = 0; i < quantidade; i++) {
    let numero = parseFloat(prompt(`Digite o número ${i + 1}: `));
    numeros.push(numero);
}

let total = 0;
for (let i = 0; i < numeros.length; i++) {
    total += numeros[i];
}
console.log(`A soma dos números é: ${total}`);