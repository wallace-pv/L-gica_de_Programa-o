
function somar(){
    calcular ("soma");
}
function subtrair(){
    calcular ("subtrai");
}
function multiplicar(){
    calcular ("multiplica");
}
function dividir(){
    calcular ("dividi");
}


function calcular(operação){
    let resultado = 0
    let numA = parseFloat(document.getElementById("valor1").value);
    let numB = parseFloat(document.getElementById("valor2").value);
    if (isNaN(numA) || isNaN(numB)) {
        alert("Entrada inválida");
        return;
    }
    switch (operação) {
        case "soma" :
            resultado = numA+numB;
            break;
        case "subtrai" :
            resultado = numA-numB;
            break;
        case "multiplica" :
            resultado = numA*numB;
            break;
        case "dividi" :
            if (numB === 0) {
                document.getElementById("resultado").textContent = "Divisão por zero!";
                return;
            }
            resultado = numA/numB;
            break;
    }
    document.getElementById("resultado").textContent = resultado;
}