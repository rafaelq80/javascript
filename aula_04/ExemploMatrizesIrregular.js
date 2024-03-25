const leia = require("readline-sync");

/*  Cria a matriz que será utilizada como base para definir o número de linhas
    Note que o Array está com o tamanho 5, indicando que a Matriz terá 5 linhas
*/
let matrizInteiros = new Array(5);

/*  Cria o Laço de Repetição For, que será responsável por criar as 5 linhas com 4 colunas
    Note que o Array interno está com o tamanho 4, indicando que cada linha da Matriz 
    terá 4 colunas
*/
for (let indiceLinha = 0; indiceLinha < matrizInteiros.length; indiceLinha++){
    matrizInteiros[indiceLinha] = Array(4);
}

for (let indiceLinha = 0; indiceLinha < matrizInteiros.length; indiceLinha++){
  
    /*  Aqui estava o erro: para pegar o tamanho da linha, precisamos indicar a posição da linha
        dentro da Matriz que estamos lendo. 
        Neste caso, como todas as linhas terão 4 colunas, eu fixei o valor 0
        para pegar o tamanho da linha 0. 
        Poderia também utilizar uma variável pegar o indice de cada linha da matriz
    */
    for (let indiceColuna = 0; indiceColuna < matrizInteiros[indiceLinha].length; indiceColuna++){
      
      matrizInteiros[indiceLinha][indiceColuna] = leia.questionInt(`Digite o numero do elemento [${indiceLinha}][${indiceColuna}]: `);
  
    }
    
}

console.table(matrizInteiros);
