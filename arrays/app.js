const prompt = require('prompt-sync')();

let nomes = Array();
let notas = Array();
let freq = [1, 2, 3];
let nome, nota;

let op = 1;
while (op !=0){
    nome = prompt("Informe o nome do aluno: ");
    nota = Number(prompt("Informe a nota do aluno: "));
    nomes.push(nome);
    notas.push(notas);
    op = prompt("Deseja informar mais nomes e notas? (1 - Sim; 0 - Não)");
}

console.log(notas);
console.log(nomes);

console.log(`Nome do primeiro aluno: ${nomes[0]}`);

nome = nomes.pop();
console.log("Último nome foi removido: " + nome);
console.log(nomes);

nomes.splice(1, 0, "Caio"); /*(Posição, Incluir=1/Excluir=0, Elemento)*/

nomes.splice(1, 1); /*Exclui o Caio*/

for (let i = 0; i < nomes.length; i++){
    console.log(nomes[i]);
}

for (let n of nomes){
    console.log(n);
}