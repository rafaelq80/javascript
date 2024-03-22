const leia = require("readline-sync");

/*  Cria a matriz que será utilizada como base para definir o número de linhas
    Note que o Array está com o tamanho 3, indicando que a Matriz terá 3 linhas
*/
let matrizInteiros = new Array(3);

/*  Cria o Laço de Repetição For, que será responsável por criar as 3 linhas com 3 colunas
    Note que o Array interno está com o tamanho 3, indicando que cada linha da Matriz 
    terá 3 colunas
*/
for (let indiceLinha = 0; indiceLinha < matrizInteiros.length; indiceLinha++){
    matrizInteiros[indiceLinha] = Array(3);
}

for (let indiceLinha = 0; indiceLinha < matrizInteiros.length; indiceLinha++){
  
    for (let indiceColuna = 0; indiceColuna < matrizInteiros.length; indiceColuna++){
      
      matrizInteiros[indiceLinha][indiceColuna] = leia.questionInt(`Digite o numero do elemento [${indiceLinha}][${indiceColuna}]: `);
  
    }
    
}

console.table(matrizInteiros);
