const prompt = require("prompt-sync")();

const metros = parseFloat(prompt("Digite o valor em metros: "));

const centimetros = metros * 100;

console.log(`${metros} metros equivalem a ${centimetros} centímetros.`);