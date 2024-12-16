let totalGeral = 0
limpar();
function adicionar(){
    //recuperar valores
    let produto = document.getElementById('produto').value;
    let quantidade = document.getElementById('quantidade').value;
    let nomeProduto = produto.split('-')[0];
    let valorDoProduto = produto.split('R$')[1]

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
    
     document.getElementById('quantidade').value=0;
}

function limpar(){
    document.getElementById('lista-produtos').innerHTML= '';
    document.getElementById('valor-total').textContent='R$ 0';
    totalGeral = 0
}


