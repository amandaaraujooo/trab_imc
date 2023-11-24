function calcular() {
    let img = document.getElementById("img");
    let resultadoCategoria = document.getElementById("c");
    let inputPeso = document.getElementById("kg");
    let inputAltura = document.getElementById("altura");
    let imcResultado = document.getElementById("imc");

    let peso = parseFloat(inputPeso.value);
    let altura = parseFloat(inputAltura.value);

    if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
        alert("Por favor, insira valores válidos para peso e altura.");
        return;
    }

    let alturaEmMetros = altura / 100;
    let imc = peso / (alturaEmMetros * alturaEmMetros);

    imcResultado.value = imc.toFixed(2);

    if (imc < 18.5) {
        resultadoCategoria.innerHTML = "Baixo peso";
    } else if (imc >= 18.5 && imc <= 24.9) {
        resultadoCategoria.innerHTML = "Peso normal";
    } else if (imc >= 25 && imc <= 29.9) {
        resultadoCategoria.innerHTML = "Excesso de peso";
    } else if (imc >= 30 && imc <= 34.9) {
        resultadoCategoria.innerHTML = "Obesidade de classe I";
    } else if (imc >= 35 && imc <= 40) {
        resultadoCategoria.innerHTML = "Obesidade de classe II";
    } else {
        resultadoCategoria.innerHTML = "Obesidade de classe III";
    }

}
