let jogosAlugados = 0;
function alterarStatus(id){
    
    let gameClicado = document.getElementById(`game-${id}`);
    let imagem = gameClicado.querySelector('.dashboard__item__img');
    let botao = gameClicado.querySelector('.dashboard__item__button');
    let nomeJogo = gameClicado.querySelector('.dashboard__item__name');
    //let texto= gameClicado.querySelector('a');
    console.log(nomeJogo.textContent);
    if(nomeJogo.textContent == "DesafioPalindromo"){
        essaPalavraEUmPalindromo(prompt("Digite a palavra para verificar se é um palindromo"))
    }
    else if(imagem.classList.contains('dashboard__item__img--rented')){

        /* A função confirm() exibe uma caixa de diálogo com duas opções: OK e Cancelar. 
         *Retorna true se o usuário clicar em OK, false caso contrário.
         *É comumente usada para confirmar ações antes de executá-las. */
        if (confirm(`Você tem certeza que deseja devolver o jogo ${nomeJogo.textContent}?`)){

        imagem.classList.remove('dashboard__item__img--rented');
        botao.classList.remove('dashboard__item__button--return');
        //texto.innerHTML = ('Alugar');
        botao.textContent = 'Alugar';
        jogosAlugados--;
        }
    }else { 
        imagem.classList.add('dashboard__item__img--rented');
        botao.classList.add('dashboard__item__button--return');
        //texto.innerHTML = ('Devolver');
        botao.textContent = 'Devolver';
        jogosAlugados++;
    }
    contarEExibirJogosAlugados();

/*solução com operador Ternario
imagem.classList.contains('dashboard__item__img--rented') ? (imagem.classList.remove('dashboard__item__img--rented'), botao.classList.remove('dashboard__item__button--return'), botao.textContent = 'Alugar') : (imagem.classList.add('dashboard__item__img--rented'), botao.classList.add('dashboard__item__button--return'), botao.textContent = 'Devolver');
*/

}

function contarEExibirJogosAlugados(){
    console.log(`total de jogos alugados: ${jogosAlugados}`);
}

/*
 * Executa após o DOM ser totalmente carregado.
 * Inicializa a variável 'jogosAlugados' com a quantidade de jogos
 * que já estão alugados na página e exibe o total no console.
 * addEventListener(...): Este é o método que adiciona um ouvinte de evento (event listener) ao documento HTML.
 * 'DOMContentLoaded': Este é o nome do evento que estamos "escutando". O evento DOMContentLoaded é disparado pelo navegador quando o HTML da página foi completamente carregado e analisado (parsing), sem esperar que imagens, folhas de estilo (CSS) e subframes terminem de carregar.
 * function() { ... }: Esta é a função anônima (ou callback function) que será executada quando o evento DOMContentLoaded ocorrer.
 */
document.addEventListener('DOMContentLoaded', function() {
    jogosAlugados = document.querySelectorAll('.dashboard__item__img--rented').length;
    contarEExibirJogosAlugados();
});
// se fosse uma function expression const essaPalavraEUmPalindromo = function () {...} deveria importar ou declara-la antes de chamar-la
function essaPalavraEUmPalindromo(palavra){
    //split é metodo do JS que separa a string em uma array contendo as letras em cada casa
    var separadorDeLetras = palavra.split("");
    //reverse reverte a array
    var palavraInvertida = separadorDeLetras.reverse();
    /*join adiciona a array de volta a uma string, como ela foi separada por split precisa voltar a ser string, 
    mas agora ja revertida*/
    palavraInvertida = palavraInvertida.join("");
    console.log(palavraInvertida);
    if(palavra == palavraInvertida){
        alert(`a palavra ${palavra} é um palindromo`);
    } else {
        alert(`a palavra ${palavra} não é um palindromo`);
    }

}