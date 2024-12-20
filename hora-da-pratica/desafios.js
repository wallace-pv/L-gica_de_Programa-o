//Crie uma função que valide se um número é positivo, negativo ou zero.
function validarNumero(numero){
    switch (true) {
        case numero>0:
            alert(`O numero ${numero} é positivo`);
            break;
        case numero<0:
            alert(`O numero ${numero} é negativo`);
            break;
        default:
            alert(`O número ${numero} é zero (neutro)`);
    }
}
validarNumero(0);

//Implemente uma função que verifique se uma pessoa é maior de idade.
