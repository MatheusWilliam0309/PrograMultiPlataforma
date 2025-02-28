const prompt = require("prompt-sync")();

const base = parseFloat(prompt("Digite a base:"));

const expoente = parseFloat(prompt("Digite o expoente:"));

// Calcula a base elevada ao expoente
const resultado = Math.pow(base, expoente);

console.log(`${base} elevado a ${expoente} é: ${resultado}`);