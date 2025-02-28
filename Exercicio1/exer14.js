const prompt = require("prompt-sync")();

const capital = parseFloat(prompt("Digite o capital (em R$): "));
const taxaJuros = parseFloat(prompt("Digite a taxa de juros (em %): "));
const periodo = parseFloat(prompt("Digite o período (em anos):"));
const taxaDecimal = taxaJuros / 100; //converte a taxa de juros em porcentagem para decimal
const montante = capital * Math.pow(1 + taxaDecimal, periodo); //calcula o montante com juros compostos(capital * (1 + taxa) ^ período)

console.log(`Montante com juros compostos: R$ ${montante.toFixed(2)}`);