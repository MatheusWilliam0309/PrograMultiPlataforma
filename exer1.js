const prompt = require("prompt-sync")();

const nota1 = parseFloat(prompt("Informe a primeira nota: "));
const nota2 = parseFloat(prompt("Informe a segunda nota: "));
const nota3 = parseFloat(prompt("Informe a terceira nota: "));

const media = (nota1 + nota2 + nota3) / 3;

console.log(`Sua média final é: ${media}`);

