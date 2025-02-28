const prompt = require("prompt-sync")();

const quilometros = parseFloat(prompt("Digite o valor em quilômetros: "));

const milhas = quilometros * 0.621371;

console.log(`${quilometros} quilômetros equivalem a ${milhas.toFixed(2)} milhas.`);