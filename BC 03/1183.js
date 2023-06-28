var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

/**
 * Escreva a sua solução aqui
 * Code your solution here
 * Escriba su solución aquí
 */
let O = lines.shift();
let M = [];

for (let i = 0; i < 12; i++) {
    M[i] = [];
    for (let j = 0; j < 12; j++) { // loop coluna
        M[i][j] = parseFloat(lines.shift());
    }
}

let soma = 0;
let contadorMedia = 0; 
for (let i = 0; i < 12; i++) {
    for (let j = i+1; j < 12; j++) {//para andar para cima
        soma += M[i][j];
        contadorMedia++;
    }
}

let resultado = O === 'S' ? soma : soma / contadorMedia;
console.log(resultado.toFixed(1));