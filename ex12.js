function velocidade(distancia, tempo){
    let velocidade = (distancia*1000) / (tempo*60);
    console.log("A velocidade do projétil é: " +velocidade.toFixed(2)+"m/s");
    return velocidade;
}
velocidade(143, 2);
