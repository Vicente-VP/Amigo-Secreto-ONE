//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = [];
let lista = document.getElementById('listaAmigos');

function adicionarAmigo(){
    let nome = document.getElementById('amigo').value;
    if(nome == null){
        alert('Digite o nome de um amigo');
    }else{
        amigos.push(nome);
        atualizarLista(nome);
        limparCampo();
    }
}

function atualizarLista(nome){
    // participantes.forEach(element => {
    //     let bullet = document.createElement('li');
    //     bullet.appendChild(element);
    //     lista.appendChild(bullet);
    // });
    let bullet = document.createElement('li');
    let texto = document.createTextNode(nome);
    bullet.appendChild(texto);
    for(let i = 0; i < amigos.length; i++){
        lista.appendChild(bullet);
    }
}

function sortearAmigo(){
    if(amigos.length == 0 || amigos.length == 1){
        alert("Adicione pelo menos 2 amigos para jogar");
    }else{
        let resultado = document.getElementById('resultado')
        lista.innerHTML = "";
        resultado.innerHTML = `Seu amigo secreto é ${amigos[Math.floor(Math.random() * amigos.length)]}`;
    }
}

function limparCampo() {
    let nome = document.getElementById('amigo');
    nome.value = '';
}