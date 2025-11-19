
function imprimirTexto(tag, texto) {
    let imprimir = document.querySelector(tag);
    imprimir.innerHTML = texto;
}

imprimirTexto('h2', 'Acesso de Usuário');

function verifica(){

    let usuario = document.getElementById('user').value;
    let senha = document.getElementById('pass').value;

    if (usuario == 'adm' && senha == 'adm'){
        alert('login feito');
    }else{
        alert('Acesso Negado');
    }
}