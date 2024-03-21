const leia = require('readline-sync');

let valor, saldo = 1000.00, operacao;

console.log("Informe a Operação");
console.log("1 - Saldo");
console.log("2 - Saque");
console.log("3 - Depósito");
operacao = leia.questionInt("Digite a opcao desejada: ");

switch(operacao){
    case 1:
        console.log("Saldo");

        console.log(`\nO Saldo da conta é: ${saldo.toFixed(2)}`);
    break;

    case 2:
        console.log("Saque");

        valor = leia.questionFloat("\nDigite o valor: ")

        if (saldo > valor)
            console.log(`\n O novo saldo é: ${ (saldo - valor).toFixed(2) }`);
        else
            console.log("\nSaldo é Insuficiente!");
        

    break;

    case 3:
        console.log("Depósito");

        valor = leia.questionFloat("\nDigite o valor: ")

        console.log(`\n O novo saldo é: ${ (saldo + valor).toFixed(2) }`);

    break;

    default:
        console.log("Operação Inválida!");
}