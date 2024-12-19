let totalGeral = 0
limpar();
function adicionar(){
    //recuperar valores
    let produto = document.getElementById('produto').value;
    let quantidade = document.getElementById('quantidade').value;
    let nomeProduto = produto.split('-')[0];
    let valorDoProduto = produto.split('R$')[1];

    if (!produto || produto.trim() === "") {
        alert("Selecione um produto válido.");
        return;
    }
    if (isNaN(quantidade)||quantidade <=0 ){
        document.getElementById('quantidade').value=1;
        alert("Quantidade invalida");
        return;
    }
    //calcular o preço, subtotal
    let preco = quantidade * valorDoProduto;
    

    //adicionar no carrinho
    let listaDeProdutos = document.getElementById('lista-produtos');

    listaDeProdutos.innerHTML = listaDeProdutos.innerHTML + `<section class="carrinho__produtos__produto">
          <span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R$${preco}</span>
        </section>`;

    //calcular e atualizar o valor total
    totalGeral+= preco;
    let valorTotal = document.getElementById('valor-total');
     valorTotal.textContent = `R$${totalGeral}`;
    
     document.getElementById('quantidade').value=1;
}

function limpar(){
    document.getElementById('lista-produtos').innerHTML= '';
    document.getElementById('valor-total').textContent='R$ 0';
    totalGeral = 0;
}

//Questões e desafios extras

//questao do curso https://cursos.alura.com.br/forum/topico-editado-473511?hasAccessMGM=true

function calcularCustoViagem(distancia, eficiencia, precoGasolina) {
    //para nao fazer calculos com negativos ou dividir por zero
    if (distancia < 0 || eficiencia <= 0 || precoGasolina < 0) {
        return "Dados inválidos. distancia e preço não podem ser negativos e eficiencia tem que ser maior que 0 .";
    }

    let consumoCombustivel = distancia / eficiencia;
    let custoTotal = consumoCombustivel * precoGasolina;
    //um return melhorado
    return `R$${custoTotal.toFixed(2)}`;
}


function calcularTempoDeViagem(distancia, velocidadeMedia){
    //para garantir fazer as contas com numeros positivos e não dividir por 0
    if (distancia < 0 || velocidadeMedia <= 0) {
        return "Dados inválidos. distancia não pode ser negativa e velocidade tem que ser maior que 0.";
    }
    //aqui foi dificil eu sei fazer na calculadora, mas tem que ser desse jeito no codigo, 
    // guardando os inteiros em variaveis
    //para depois tirar o numero inteiro do resultado então multiplicar só os quebrados 
    // para ir de hora pra minuto e de minuto pra segundos

    //tempoHoras retorna nesse exemplo 400/182 = 2,197...
    let tempoHoras = distancia / velocidadeMedia;

    //math.floor guarda o 2 inteiro em horas 
    let horas = Math.floor(tempoHoras);

    //agora tiro o inteiro 2 do tempoHoras que esta com 2,197 
    // e quardo só o 0,197... em restoHoras
    let restoHoras = tempoHoras - horas;

    //agora tenho que retirar o inteiro da multiplicação desse resto 0,197*60 = 11,868... 
    // pego o 11 com Math.floor e coloco ja como minutos
    let minutos = Math.floor(restoHoras * 60);

    //agora para fazer o resto de minutos tenho que fazer denovo 0,197*60 = 11,868...
    //  e subtrair o inteiro 11 dessa conta entao vai ficar o resto 0,868...
    let restoMinutos = (restoHoras * 60) - minutos;

    // agora só multiplicar o resto dos minutos por 60 e temos 52 segundos
    //  vou parar em segundos pq ja ta bom, entao arrendonda no Math.floor
    let segundos = Math.round(restoMinutos * 60);

    return `${horas} hora(s), ${minutos} minuto(s) e ${segundos} segundo(s)`;
}

let distancia = 400; 
let eficiencia = 15; 
let precoGasolina = 5.80; 
let velocidadeMedia = 182;

let custo = calcularCustoViagem(distancia, eficiencia, precoGasolina);
let tempo = calcularTempoDeViagem(distancia, velocidadeMedia);

console.log(`Custo da viagem: ${custo}`);
console.log(`Tempo de viagem: ${tempo}`);

