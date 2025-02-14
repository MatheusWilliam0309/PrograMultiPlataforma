const prompt = require("prompt-sync")();

const raio = parseFloat(prompt("Digite o raio do círculo: "));

const pi = Math.PI; // Define o valor de π (pi)
const area = pi * Math.pow(raio, 2); // Calcula a área do círculo

console.log(`A área do círculo é: ${area}`);