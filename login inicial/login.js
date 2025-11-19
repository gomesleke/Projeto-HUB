
let imprimir = document.querySelector('h2');
imprimir.innerHTML = 'Acesso de Usuário';

function verifica(){

    let usuario = document.getElementById('user').value;
    let senha = document.getElementById('pass').value;

    if (usuario == 'adm' && senha == 'adm'){
        alert('login feito');
    }else{
        alert('Acesso Negado');
    }
}