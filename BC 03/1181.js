var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');


let L = parseInt(lines.shift());
let T = lines.shift();
let M = [];



for (let i = 0; i < 12; i++) {
    M[i] = [];
    for (let j = 0; j < 12; j++) {
        M[i][j] = parseFloat(lines.shift());
    }
}

let soma = 0;
for (let j = 0; j < 12; j++) {
    soma += M[L][j];
}

let resultado = T === 'S' ? soma : soma / 12;

console.log(resultado.toFixed(1));

