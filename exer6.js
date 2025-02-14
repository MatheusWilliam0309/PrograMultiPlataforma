const prompt = require("prompt-sync")();

const altura = parseFloat(prompt("Digite a altura do retângulo: "));
const largura = parseFloat(prompt("Digite a largura do retângulo: "));
    
const perimetro = 2 * (largura + altura); // Calcula o perímetro do retângulo

console.log(`O perímetro do retângulo é: ${perimetro.toFixed(2)}`);