var a = 4;
var b = 3;
var c = 2;
var d = 1;

//Todos os métodos abaixo são válidos, no entando, o último não armazena o resultado em memória:

// var produto = a*c;
// var soma = b+d;
// console.log(produto, soma);

// function produto(a, b){return a*b;}
// function soma(a, b){return a+b}
// let resproduto = produto(a, c);
// let ressoma = soma(b, d)
// console.log(resproduto);
// console.log(ressoma);

const produto=(a, b) => a*b;
const soma=(a, b) => a+b;
console.log(produto(a, c));
console.log(soma(b, d));

