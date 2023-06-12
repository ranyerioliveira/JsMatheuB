//criando um elemento dentro do html

//primeiro vc criar a tag

var novoParagrafo = document.createElement("p")

//depois cria o texto com o nó

var texto = document.createTextNode("Esse é um novo texto")

//direciona pro html

novoParagrafo.appendChild(texto);

//jogar para o html selecionando onde vai entrar, neese caso será no body

var body = document.querySelector("body")

console.log(body)

//Agora é colocar o texto no body no hmtl html, 

body.appendChild(novoParagrafo)

//inserir um conteiner

var container = document.getElementById("container")

console.log(container)

//criando um elemento dentro do conteiner (div)

var el = document.createElement("span")

el.appendChild(document.createTextNode("Novo elemento dentro da div"))

console.log(el)

container.appendChild(el);

var subTitulo = document.createElement("h2")

var texto2 = document.createTextNode("Um outro titulo");

subTitulo.appendChild(texto2);

body.appendChild(subTitulo);
