const prompt = require("prompt-sync")();

const preco = parseFloat(prompt("Digite o preço: "));
const descontoP = parseFloat(prompt("Digite o percentual de desconto (%): "));
const desconto = (preco * descontoP) / 100;
const precoComDesconto = preco - desconto;  

console.log(`Preço com desconto: R$ ${precoComDesconto.toFixed(2)}`);