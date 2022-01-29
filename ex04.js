//Escreva um programa que imprime a soma dos 100 primeiros números naturais
let vetor = [];
for(i = 0; i<=100; i++){
    vetor.push(i);
}
let soma = vetor.reduce((estado, item) => estado+item);
console.log(soma);