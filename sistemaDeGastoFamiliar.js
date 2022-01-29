// ### Sistema de gasto familiar
/*
Crie um objeto que possuirá 2 propriedades, ambas do tipo array:
    * receitas: []
    * despesas: []
Agora, crie uma função que irá calcular o total de receitas e despesas e irá mostrar uma mensagem se a família está com saldo positivo ou negativo, seguindo o valor do saldo
*/

let familyTeller = {
    inc: [46, 23, 12],
    exp: [43, 23, 12],
}

function sum(array){
    total = 0;
    for(let value of array){
        total += value;
    }
    return total;
}

function calculateBalance(incomes, expenses){
    const calculateIncomes = sum(incomes);
    const calculateExpenses = sum(expenses);
    let finalBalance;
    if(calculateIncomes>calculateExpenses){
        finalBalance = console.log("Saldo positivo");
    }else if(calculateIncomes == calculateExpenses){
        finalBalance = console.log("Neutro");
    }else{
        finalBalance = console.log("Saldo negativo");
    }
    return finalBalance;
}

console.log(calculateBalance(familyTeller.inc, familyTeller.exp)); //POR ALGUM MOTIVO TÁ DANDO Saldo positivo e undefined

// ou:
function calculateBalance1(){
    const calculateIncomes = sum(familyTeller.inc);
    const calculateExpenses = sum(familyTeller.exp);
    const total = calculateIncomes - calculateExpenses;
    const balanceOk = total >= 0
    let balanceInf = "negativo";
    if(balanceOk){
        balanceInf = "positivo";
    }
    return balanceInf;
}
console.log(calculateBalance1());


