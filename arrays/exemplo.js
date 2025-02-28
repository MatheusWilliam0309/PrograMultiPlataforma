let numeros = [1, 2, 3, 4];

let dobrados = numeros.map(n => n * 2); //mapeia todo elemento do numeros

console.log(dobrados);

let idades = [18, 21, 16, 25, 30];
let menorIdade = idades.filter(i => i < 18); // filtra um elemento específico

console.log("Quantidade de pessoas menores de idade: "+menorIdade.length); //length "visualiza" todos os elementos de menorIdade
console.log(menorIdade);

let letras = ['d', 'A', 'c', 'b', 'a'];
letras.sort(); //ordem crescente
console.log(letras);

letras.reverse(); //ordem decrescente
console.log(letras);

let novoArray = [...idades, 49]; // ... puxa todas as idades
console.log(novoArray);


