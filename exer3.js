const prompt = require("prompt-sync")();

const fahrenheit = parseFloat(prompt('Digite a temperatura em Fahrenheit: '));
const celsius = (fahrenheit - 32) / 1.8; //Converte Celsius para Fahrenheit

console.log(`Temperatura em Celsius: ${celsius}°C`);