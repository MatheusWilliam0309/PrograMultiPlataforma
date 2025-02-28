const prompt = require("prompt-sync")();

const dias = parseFloat(prompt("Digite o valor em dias: "));

const horas = dias * 24; //(1 dia = 24 horas)
const minutos = dias * 1440; //(1 dia = 1440 minutos)
const segundos = dias * 86400; //(1 dia = 86400 segundos)

console.log(`${dias} dias equivalem a:`);
console.log(`- ${horas} horas`);
console.log(`- ${minutos} minutos`);
console.log(`- ${segundos} segundos`);