//exercício 1: dada a variável idade, escreva um programa que imprima se a pessoa é maior ou menor de 18 anos. exercício 2: complemente o exercício anterior com as seguintes faixas etárias: idade<12(criança); 12-18(adolescente); 18-60(adulto); >60(idoso)

//existem dois modos de fazer que encontrei:
//primeiro:
var idade = 70
if (idade < 18) {
    console.log('menor de 18 anos')
}else{
    console.log('maior de 18 anos')
}
if (idade < 12) {
    console.log('criança')
}else if(idade < 18) {
    console.log('adolescente')
}else if(idade < 60) {
    console.log('adulto')
}else if(idade > 120) {
    console.log('incoerente com a realidade')
}else{
    console.log('idoso')
}

//sengundo:
var idade1 = 333
if(idade1 < 18) {
    console.log('menor de 18')
    if(idade1 <12) {
        console.log('criança')
    }else{
        console.log('adolescente')
    }
}else{
    console.log('maior de 18')
    if(idade1 < 60) {
        console.log('adulto')
    }else if(idade1 <120) {
        console.log('idoso')
    }else{
        console.log('incoerente com a realidade')
    }
}