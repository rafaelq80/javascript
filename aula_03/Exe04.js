const leia = require('readline-sync');

let palavra1, palavra2, palavra3;

palavra1 = leia.question("Digite a primeira palavra: ");
palavra2 = leia.question("Digite a segunda palavra: ");
palavra3 = leia.question("Digite a terceira palavra: ");

if (palavra1 === "vertebrado"){
// vertebrado
    if(palavra2 === "ave"){
        // ave
        if(palavra3 === "carnivoro"){
            console.log("Águia");
        }else{
            console.log("Pomba");
        }

    }else{
        // mamifero

        if(palavra3 === "herbivoro"){
            console.log("Vaca");
        }else{
            console.log("Homem");
        }

    }

}else{
// Invertebrado

    if(palavra2 === "inseto"){

        if( palavra3 === "herbivoro"){
            console.log("Lagarta");
        }else{
            console.log("Pulga");
        }

    }else{

        if( palavra3 === "onivoro"){
            console.log("Minhoca");
        }else{
            console.log("Sanguessuga");
        }
    }
}

