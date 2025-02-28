const prompt = require("prompt-sync")();

const largura = parseFloat(prompt("Digite a largura do retângulo: "));
const altura = parseFloat(prompt("Digite a altura do retângulo: "));

const area = largura * altura;

console.log(`A área do retângulo é: ${area}`);