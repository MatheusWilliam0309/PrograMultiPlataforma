const prompt = require("prompt-sync")();

const raio = parseFloat(prompt("Digite o raio do círculo:"));

const pi = Math.PI; //define o valor de pi

const perimetro = 2 * pi * raio; //calcula o perímetro do círculo

console.log(`O perímetro do círculo é: ${perimetro.toFixed(2)}`);