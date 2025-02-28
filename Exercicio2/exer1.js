const prompt = require("prompt-sync")();

let quantidade = parseInt(prompt("Quantos nomes você deseja cadastrar?: "));

let nomes = [];
for (let i = 0; i < quantidade; i++) {
    let nome = prompt(`Digite o nome ${i + 1}:`);
    nomes.push(nome);
}

//a.localeCompare(b, undefined, { sensitivity: 'base' }) para comparar as strings a e b.
nomes.sort((a, b) => a.localeCompare(b, undefined, { sensitivity: 'base' })); //parâmetro{sensitivity: 'base'} ignora diferença entre maiúscula e minúscula
console.log("Nomes cadastrados em ordem alfabética:");
nomes.forEach(nome => console.log(nome));