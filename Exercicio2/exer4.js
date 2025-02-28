const prompt = require("prompt-sync")();

let frase = prompt("Digite uma frase: ");
let palavras = frase.split(" "); //dividindo frases usando split()

console.log(`A frase contém ${palavras.length} palavra(s).`);