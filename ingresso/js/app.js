// function comprar(){
//     quantidade = document.getElementById("qtd").value;
//     tipoDeIngresso = document.getElementById("tipo-ingresso").value;
//     qtdPista = document.getElementById("qtd-pista");
//     qtdSuperior = document.getElementById("qtd-superior");
//     qtdInferior = document.getElementById("qtd-inferior");
//     console.log(qtdPista.textContent, qtdSuperior, qtdInferior);
    
//     if ( isNaN(quantidade) || quantidade <= 0) {
//         alert("Por favor, insira uma quantidade valida");
//     }

//     if (quantidade > parseInt(qtdPista.textContent) && tipoDeIngresso === "pista") {
//         alert("Quantidade indisponível para Pista");
//         return;
//     }
    
//     if (quantidade > parseInt(qtdInferior.textContent) && tipoDeIngresso === "inferior") {
//         alert("Quantidade indisponível para Inferior");
//         return;
//     }
    
//     if (quantidade > parseInt(qtdSuperior.textContent) && tipoDeIngresso === "superior") { 
//         alert("Quantidade indisponível para Superior");
//         return;
//     } 
//     switch (tipoDeIngresso) {
//         case "pista":
//             qtdPista.textContent = parseInt(qtdPista.textContent) - quantidade;
//             break;
//         case "superior":
//             qtdSuperior.textContent = parseInt(qtdSuperior.textContent) - quantidade;
//             break;
//         case "inferior":
//             qtdInferior.textContent = parseInt(qtdInferior.textContent) - quantidade;
//             break;
//     }
    
// }

//solucao com objeto
function comprar() {
    const quantidade = parseInt(document.getElementById("qtd").value);
    const tipoDeIngresso = document.getElementById("tipo-ingresso").value;

    if (isNaN(quantidade) || quantidade <= 0) {
        alert("Por favor, insira uma quantidade válida.");
        return;
    }

    const tiposDeIngresso = {
        pista: {
            elemento: document.getElementById("qtd-pista"),
            nome: "Pista" // Para mensagens de erro mais dinâmicas
        },
        superior: {
            elemento: document.getElementById("qtd-superior"),
            nome: "Superior"
        },
        inferior: {
            elemento: document.getElementById("qtd-inferior"),
            nome: "Inferior"
        }
    };

    const ingressoSelecionado = tiposDeIngresso[tipoDeIngresso];

    if (!ingressoSelecionado) {
        alert("Tipo de ingresso inválido."); // Tratamento para tipo inválido
        return;
    }

    const quantidadeDisponivel = parseInt(ingressoSelecionado.elemento.textContent);

    if (quantidade > quantidadeDisponivel) {
        alert(`Quantidade indisponível para ${ingressoSelecionado.nome}`);
        return;
    }

    ingressoSelecionado.elemento.textContent = quantidadeDisponivel - quantidade;
    alert("Compra efetuada com sucesso");
}

//desafios extras
//verificar par
function verificarPar(num){
    let resto = num % 2
    if (resto != 0){
        return console.log(`O numeo ${num} não é par`);
    }else {
        return console.log(`O numeo ${num} é par`);
    }

}
verificarPar (11);
//conversão de temperatura
function converterTemperatura (escala, valor){
    if (escala.toLowerCase()=== "fahrenheit") {
        let resultadoCelsius = (valor-32)/1.8;
        return resultadoCelsius;
    }else if (escala.toLowerCase()=== "celsius") {
        let resultadoFahrenheit = (valor*1.8)+32;
        return resultadoFahrenheit;
    }else{
        return ("Escala Invalida");
    }

}
let FtoC = converterTemperatura ("fahrenheit",74);
let CtoF = converterTemperatura ("celsius",23.33333333);
console.log(`Essa temperatura em Celsius fica: ${FtoC.toFixed(2)} e em Fahrenheit fica: ${CtoF.toFixed(2)}`);