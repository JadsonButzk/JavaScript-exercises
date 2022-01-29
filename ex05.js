//escreva um programa que imprima todos os pares entre 1 e 1000.
const vetor = []
for(i = 1;i < 1001; i++){
    vetor.push(i);
}
const pares = vetor.filter( x => x%2 == 0)
console.log(pares)

//agora verifique se um número é par
let x = 80;
let paridade = x%2 == 0 ? true:false;
console.log(paridade);

// escreva um programa que imprime todos os ímpares até 100.
let start = 1
let stop = 100
while(start<100){
    console.log(start)
    start += 2
}