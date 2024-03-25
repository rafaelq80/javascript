const leia = require('readline-sync');

let matriz = new Array(3);

for(let indice = 0; indice < matriz.length; indice ++){
    matriz[indice] = Array(3);
}

let diagonalPrincipal = "", diagonalSecundaria = "";
let somaDiagonalPrincipal = 0, somaDiagonalSecundaria = 0;

for (let indiceLinha = 0; indiceLinha < matriz.length; indiceLinha ++){

    for (let indiceColuna = 0; indiceColuna < matriz.length; indiceColuna ++){
    
        matriz[indiceLinha][indiceColuna] = leia.questionInt("Digite um numero inteiro: ");

    }

}

console.table(matriz);

/** Os Elementos da Diagonal Principal*/
for (let indice = 0; indice < matriz.length; indice ++){
    diagonalPrincipal += matriz[indice][indice] + " ";
    somaDiagonalPrincipal += matriz[indice][indice];
}

/** Os Elementos da Diagonal Secundária*/
for (let indice = 0; indice < matriz.length; indice ++){
    diagonalSecundaria += matriz[indice][matriz.length - 1 - indice] + " ";
    somaDiagonalSecundaria += matriz[indice][matriz.length - 1 - indice];
}

console.log(`Elementos da Diagonal Principal: ${diagonalPrincipal}`);
console.log(`A Soma dos elementos da Diagonal Principal é: ${somaDiagonalPrincipal}`);
console.log(`Elementos da Diagonal Secundária: ${diagonalSecundaria}`);
console.log(`A Soma dos elementos da Diagonal Secundária é: ${somaDiagonalSecundaria}`);