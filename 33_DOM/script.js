//document.write("<h1>DOM</h1><p>O DOM nada mais é que modificação do HTML via javascript por meio de metodos, podendo manipular eventos.</p><p>O DOM é uma copia do HTML e não ele em si.</p><p>A arvore DOM serve para saber onde será feira a mudança no HTML:</p><p><img src='Capturar.PNG' alt='' height='400px'></p><p>Para acessar o DOM é arecido com CSS</p>")


//acessando por tag

var titulo = document.getElementsByTagName("h1")[0];// o '0' em [] ta indicando a posição que é o primeiro h1 do html, o getElements no plural quer dizer que vai pegar todos os elementos, nesse caso todos os h1.

console.log(titulo);

var lis = document.getElementsByTagName("li");

console.log(lis[2]);

//id

var paragrafo = document.getElementById("paragrafo");

console.log(paragrafo);

var lis2 = document.getElementById("lista2");

console.log(lis2);

//classe

var itens = document.getElementsByClassName("item");

console.log(itens[3]);

