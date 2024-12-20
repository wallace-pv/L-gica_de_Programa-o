let listaDeAmigos = [];
function adicionar(){
    let nomeDoAmigoInput = document.getElementById("nome-amigo");
    let nomeDoAmigo = nomeDoAmigoInput.value.trim(); // Armazena o nome original
    if (nomeDoAmigo === "") { // Verifica se o input está vazio ou contém apenas espaços em branco
        alert("Por favor, digite um nome.");
        return; // Sai da função sem adicionar o nome
    }
    // Converte o nome para minúsculo APENAS para a comparação
    if (listaDeAmigos.some(amigo => amigo.toLowerCase() === nomeDoAmigo.toLowerCase())) {
        alert("Nome ja adicionado");
        return;
    }
    listaDeAmigos.push(nomeDoAmigo); // Adiciona o nome ORIGINAL à lista

    nomeDoAmigoInput.value = '';
    atualizarLista();
    atualizarSorteio();
}
function sortear(){
    let sorteio = document.getElementById("lista-sorteio");
    if (listaDeAmigos.length < 4) {
        sorteio.innerHTML = "Adicione ao menos 4 amigos para sortear";
        return;
    }
    embaralha(listaDeAmigos);
    sorteio.innerHTML = ''; // Limpa o sorteio antes de exibir os resultados
    for (let index = 0; index < listaDeAmigos.length; index++) {
        
        const amigoAtual = listaDeAmigos[index];
        const amigoSorteado = listaDeAmigos[(index + 1) % listaDeAmigos.length]; // Usando o operador % para o último elemento
        sorteio.innerHTML += `${amigoAtual} --> ${amigoSorteado}<br>`;
    }
}
function excluirAmigo(index) {
    listaDeAmigos.splice(index, 1);
    atualizarLista();
    atualizarSorteio();
}
function atualizarSorteio() {
    let sorteio = document.getElementById('lista-sorteio');
    if (listaDeAmigos.length === 0) {
        sorteio.innerHTML = "Nenhum amigo adicionado.";
    } else if (listaDeAmigos.length < 4) {
        sorteio.innerHTML = "Adicione ao menos 4 amigos para sortear";
    }
     else {
        sorteio.innerHTML = '';
    }
}
function atualizarLista() {
    let lista = document.getElementById('lista-amigos');
    lista.innerHTML = '';
    listaDeAmigos.forEach((amigo, i) => { // Usando forEach para simplificar
        let itemLista = document.createElement('li');
        itemLista.textContent = amigo; // Exibe o nome ORIGINAL
        itemLista.addEventListener('click', () => excluirAmigo(i));
        lista.appendChild(itemLista);
    });
}

function embaralha(lista) {
    let indice = lista.length
    while(indice) {
        // atenção para o pós-incremento indice-- 
        const indiceAleatorio = Math.floor(Math.random() * indice--);
        [lista[indice], lista[indiceAleatorio]] = [lista[indiceAleatorio], lista[indice]];
    }
}
function reiniciar(){
    listaDeAmigos = [];
    atualizarLista();
    atualizarSorteio(); // Atualiza o sorteio para exibir a mensagem
}
// Chamada inicial para exibir a mensagem "Nenhum amigo adicionado"
atualizarSorteio();

/*desafios extras 

Adicione os números 1,2,3 em uma variável chamada minhaLista 
e armazene os números 4, 5 e 6 separadamente em outra variável. 
Use o método concat() para combinar as sequências de valores em uma nova lista chamadanovaLista. 
Imprima novaLista no console.*/

let minhaLista = [];
// Adicionando elementos com push
minhaLista.push(1,2,3,3);
let minhaLista2 = []
minhaLista.push(4,5,6,6,4,5);
let novaLista = minhaLista.concat(minhaLista2);
console.log("Juntando Arrays:", novaLista);

// Remova o último elemento de novaLista. Imprima novaLista após a remoção.
novaLista.pop();
console.log("Desafio 4:", novaLista)

/*Utilize o algoritmo de Fisher-Yates (também conhecido como Knuth Shuffle) 
para embaralhar os elementos em novaLista. 
Pesquise e adapte o código para realizar o embaralhamento.*/

let i = novaLista.length
while(i) {
    // atenção para o pós-incremento indice-- 
    const indiceAleatorio = Math.floor(Math.random() * i--);
    [novaLista[i], novaLista[indiceAleatorio]] = [novaLista[indiceAleatorio], novaLista[i]];
}
console.log(novaLista)

/*Crie uma função chamada removerDuplicatas que aceita um array como parâmetro
e retorna um novo array sem elementos duplicados. 
Teste a função com novaLista e imprima o array resultante.*/

// Função para remover duplicatas de um array
function removerDuplicatas(array) {
    return [...new Set(array)];
  }
  
  // Testando a função com novaLista
  let novaListaSemDuplicatas = removerDuplicatas(novaLista);
  console.log("Remover duplicatas:", novaListaSemDuplicatas);