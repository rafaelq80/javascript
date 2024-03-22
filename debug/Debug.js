const leia = require("readline-sync");

let vetorInteiros = new Array(5);

for (let indice = 0; indice < vetorInteiros.length; indice++) {
  vetorInteiros[indice] = leia.questionInt(
    "Digite um valor para a posicao [" + indice + "]: "
  );
}

for (let contador = 0; contador < vetorInteiros.length; contador++)
  console.log("posição " + contador + " = " + vetorInteiros[contador]);


  