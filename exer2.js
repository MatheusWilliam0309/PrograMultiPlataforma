const prompt = require("prompt-sync")();

const celsius = parseFloat(prompt("Digite a temperatura em Celsius: "));
const fahrenheit = (celsius * 9/5) + 32; // Converte Celsius para Fahrenheit

console.log(`Temperatura em Fahrenheit: ${fahrenheit}°F`);