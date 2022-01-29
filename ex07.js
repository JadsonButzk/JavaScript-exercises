//Escreva uma função que recebe o valor do raio de um círculo e retorne o seu perímetro (C = 2*pi*r)

//1
const pi = 3.1415;
let perimetro = (r) => 2*pi*r;
console.log(perimetro(4));

//2
let perimetro2 = function(rr){return 2*pi*rr};
let resultado = perimetro2(4);
console.log(resultado);

