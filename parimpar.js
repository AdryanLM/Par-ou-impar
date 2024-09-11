// Importa o módulo prompt-sync
const teclado = require('prompt-sync')({sigint: true});

// Solicita ao usuário para inserir um número
const numero = parseFloat(teclado('Digite um número: '));

// Verifica se o valor é um número válido
if (isNaN(numero)) {
    console.log('Por favor, insira um número válido.');
} else {
    // Verifica se o número é par ou ímpar
    if (numero % 2 === 0) {
        console.log('O número ' + numero + ' é par.');
    } else {
        console.log('O número ' + numero + ' é ímpar.');
    }
}
