const leia = require("readline-sync");

let vetorStrings = [
  "Thais Siqueira",
  "Beatriz Alves",
  "Vinicios Gabriel",
  "Bruna Teles",
  "André Nascimento",
  "Pedro Almeida",
];

let array_nomes = ["Samantha", "Amanda", "Vinicius", "Cauê", "Leonardo"];

let vetorNumeros = Array(5);

for (let indice = 0; indice < vetorStrings.length; indice++) {
  console.log(`\nPosição ${indice} = ${vetorStrings[indice]}`);
}

for (let indice = 0; indice < vetorNumeros.length; indice++) {
  vetorNumeros[indice] = leia.questionInt("Digite um numero: ");
}

vetorNumeros.sort();

console.table(vetorNumeros);

array_nomes.sort();
array_nomes.reverse();

console.table(array_nomes);

vetorStrings.sort();
vetorStrings.reverse();

console.table(vetorStrings);