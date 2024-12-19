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