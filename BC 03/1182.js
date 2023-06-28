var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

/**
 * Escreva a sua solução aqui
 * Code your solution here
 * Escriba su solución aquí
 */
let C = parseInt(lines.shift());
let T = lines.shift();
let M = [];



for (let i = 0; i < 12; i++) {//loop linha
    M[i] = [];
    for (let j = 0; j < 12; j++) { //loop coluna
        M[i][j] = parseFloat(lines.shift());
    }
}

let soma = 0;
for (let i = 0; i < 12; i++) {
    soma += M[i][C];
}

let resultado = T === 'S' ? soma : soma / 12;
console.log(resultado.toFixed(1));