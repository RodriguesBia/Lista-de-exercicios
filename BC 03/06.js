var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var N = parseInt(lines.shift());
var X = lines.shift().split(" ");
var menor = X[0];
var pos = 0;
//length = valor informado na netrada, no caso do exemplo, tem tamanho 10
for(var i=1;i<X.length;i++){ //i = 2; 2 <10, pois estamos começando da posição 1.
    if(menor > X[i]){ // 1 > 2 = falso - nesse exeplo o for se repete até o 1 > -5 = verdadeiro, então o 1 perde lugar para o -5.
        menor = parseInt(X[i]);
        pos = i;
    }
}
console.log(`Menor valor: ${menor}`);
console.log(`Posicao: ${pos}`);