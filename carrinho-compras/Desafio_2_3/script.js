function capturarValores() {
    const nome = document.getElementById("campoNome").value;
    const idade = document.getElementById("campoIdade").value;

    // Verifica se o nome está vazio ou contém apenas espaços em branco
    if (nome.trim() === "") {
        alert("Por favor, insira um nome.");
        return; // Sai da função se o nome for inválido
    }

    // Verifica se a idade é um número válido e positivo
    if (isNaN(idade) || idade === "" || parseInt(idade) < 0 || !Number.isInteger(Number(idade))) {
        alert("Por favor, insira uma idade válida (número inteiro positivo).");
        return; // Sai da função se a idade for inválida
    }

    let mostrar = document.getElementById("mostraNome");
    mostrar.innerText = `Seu nome é: ${nome}\nSua idade é: ${idade}`;
}

function modificarConteudo() {
    const texto = document.getElementById("meuParagrafo");
    texto.textContent = `Texto modificado por: ${nome}`;
}

const duasSentencas = "Criar o que não existe ainda deve ser a pretensão de todo sujeito que está vivo; A tarefa mais importante de uma pessoa que vem ao mundo é criar algo"
const frasesSeparadas = duasSentencas.split(';');

console.log(frasesSeparadas);