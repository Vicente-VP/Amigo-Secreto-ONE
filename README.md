# Amigo-Secreto-ONE

Neste Challenge do curso ONE nos foi proposto a desenvolver um programa para sortear amigos, ou seja, você adiciona os amigos e após adicionar todos eles você só precisa clicar em sortear amigo, assim aparecendo o amigo sorteado. 

Código

Primeiramente foi pedido para criar um array, onde ele amazenerá os amigos adicionados

```js
let amigos = [];
```

FUNÇÃO: `adicionarAmigo()`

```js
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
```

Nela nós verificamos se o input tem valor nulo, caso ele tenha da um alerta pro usuário pedindo que ele digite o nome de um amigo, senão ele adiciona o amigo na lista e chama mais duas funções `atualizarLista()` e `limparCampo()` que serão explicadas mais a frente. 

FUNÇÃO: `atualizarLista()`

```js
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
```

Nessa função nós criamos um novo elemento `li` e adicionamos o nome adicionado nele, após isso fizemos um loop `for` que continua até o tamanho do array `amigos`. No loop nós adicionamos o elemento `li` na varável lista `let lista = document.getElementById('listaAmigos');` que seria o nosso `ul`.

FUNÇÃO: `limparCampo()`

```js
function limparCampo() {
    let nome = document.getElementById('amigo');
    nome.value = '';
}
```

A função limparCampo como o próprio nome diz serve para limpar o campo, neste caso limpamos o campo onde adicionamos o nome. Primeiramente criamos a variável nome que armazena o input, logo em seguida colocamos o valor dele como uma string vazia.
