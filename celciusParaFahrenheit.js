/* ### Celsius em Fahrenheit e vice versa

    Crie uma função que receba  uma string em celsius ou fahrenheit e faça a transformação de uma unidade para outra

    C = (F - 32) * 5/9

    F = C * 9/5 + 32

*/

/* 
function temperatureConversor(temperature, scale){
    temperature = Number(temperature);
    let output;
    if(scale == "C"){
        output = temperature * 9 / 5 +32 + "graus fahrenheit";
    }else if(scale == "F"){
        output = (temperature - 32)*5/9 + "graus celsius";
    }else{
        output = false;
    }
    return output;
}
console.log(temperatureConversor("76", "C")); */

// Resolução do professor abaixo

//transformDegree(50f)
function transformDegree(degree) {
    const celciusExist = degree.toUpperCase().includes("C");
    const fahrenheitExist = degree.toUpperCase().includes("F");

    //fluxo de Erro
    if(!celciusExist && !fahrenheitExist){
        throw new Error("Grau não indentificado");
    }

    //fluxo ideal F to C;
    let updatedDegree = Number(degree.toUpperCase().replace("F", ""));
    let formula = fahrenheit => (fahrenheit - 32) * 5/9;
    let degreeSign = "C";

    //fluxo alternativo C to F;
    if(celciusExist){
        updatedDegree = Number(degree.toUpperCase().replace("C", ""));
        formula = celsius => celsius * 9/5 + 32;
        degreeSign = "F";       
    }

    return formula(updatedDegree) + degreeSign;
}
try{
    console.log(transformDegree('10c'));
    console.log(transformDegree('50f'));
    transformDegree("50g");
}catch(error){
    console.log(error.message);
}