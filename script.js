//função para calcular o IMC
function calcularIMC() {
    //entradas do usuário
    let pesoInput = document.getElementById("peso").value;
    let alturaInput = document.getElementById("altura").value
    // conversão de string para número
    let peso = parseFloat(pesoInput);
    let altura = parseFloat(alturaInput);
    //tratamento de erro
    if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
        resultado.textContent = "Por favor, insira valores válidos!";
        classificacao.textContent = "";
        return;
    }
    //fórmula para cálculo do IMC com arredondamento
    const imc = peso / (altura * altura);
    resultado.textContent = "Seu IMC é: " + imc.toFixed(2) + " kg/m²";
    //classificação do IMC
    if (imc < 18.5) {
        classificacao.textContent = "Classificação: Abaixo do peso";
    } else if (imc < 24.9) {
        classificacao.textContent = "Classificação: Peso normal";
    } else if (imc < 29.9) {
        classificacao.textContent = "Classificação: Sobrepeso";
    } else {
        classificacao.textContent = "Classificação: Obesidade";
    }
}