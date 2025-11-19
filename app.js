let numeroSecreto = gerarNumeroAleatorio();
console.log(numeroSecreto);

function exiberTexto(tag,texto){ //Otimização com funções
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

exiberTexto('h1','NÚMERO SECRETO');
exiberTexto('p','Escolha um número entre 1 e 10');

function verificarChute(){
    let chute = document.querySelector('input').value;

    if (chute==numeroSecreto){
        exiberTexto('p','VOCÊ ACERTOUUUUUUUUUUUUUUUUUUUUUU');
    }
}

function gerarNumeroAleatorio() {
    return parseInt(Math.random()*10 +1);
}