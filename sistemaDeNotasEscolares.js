/* ### Transformar notas escolares

Crie um algoritmo que transforme as notas do sistema numérico para sistema de notas em caracteres tipo A B C

* de 90 para cima - A
* entre 80 - 89   - B
* entre 70 - 79   - C
* entre 60 - 69   - D
* menor que 60    - F

*/

function getScore(score){
    let scoreA = score >=90 && score <=100;
    let scoreB = score >=80 && score <90;
    let scoreC = score >=70 && score <80;
    let scoreD = score >=60 && score <70;
    let scoreF = score <60 && score >=0;
    let scoreFinal;
    console.log(score)
    if(scoreA){
        scoreFinal = "A";
    }else if(scoreB){
        scoreFinal = "B";
    }else if(scoreC){
        scoreFinal = "C";
    }else if(scoreD){
        scoreFinal = "D";
    }else if(scoreF){
        scoreFinal = "F";
    }else{
        scoreFinal = "Nota Inválida";
    }
    return scoreFinal;
}
console.log(getScore(107));
console.log(getScore(97));
console.log(getScore(87));
console.log(getScore(77));
console.log(getScore(67));
console.log(getScore(57));
console.log(getScore(0));
console.log(getScore(8));
console.log(getScore(-9));
 
//usando if

/*
let note;
note = 60;
if(note < 60){
    note = "F";
}else if(note > 59 && note < 70){
    note = "D";
}else if(note > 69 && note < 80){
    note = "C";
}else if(note > 79 && note < 90){
    note = "B";
}else{
    note = "A";
}
console.log(note) */



//usando switch

/* note = 0;
switch(note){
    case note<60: note = "F";
    break;
    case note>59 && note<70: note = "D";
    break;
    case note>69 && note<80: note = "C";
    break;
    case note>79 && note<90: note = "B";
    break;
    default: note = "A"; 
}
console.log(note) */

