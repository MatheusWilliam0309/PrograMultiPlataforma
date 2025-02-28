const prompt = require("prompt-sync")();

const capital = parseFloat(prompt("Digite o capital (em R$): "));
const taxaJuros = parseFloat(prompt("Digite a taxa de juros (em %): "));
const periodo = parseFloat(prompt("Digite o período (em anos): "));
const jurosSimples = (capital * taxaJuros * periodo) / 100; //cálculo do juros simples

console.log(`Juros simples: R$ ${jurosSimples.toFixed(2)}`);