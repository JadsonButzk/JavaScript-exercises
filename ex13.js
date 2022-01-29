function pesparametros(pes) {
    pes.toFixed(4);
    conversao = 30.48;
    let metro = pes*conversao;
    return metro;
}
console.log(pesparametros(2));