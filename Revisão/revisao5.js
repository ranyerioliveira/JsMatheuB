//incluir um elemento html com js

var novoParagrafo = document.createElement("p"); // cria a tag (elemento)

var novoTexto = document.createTextNode("Esse é o texto que foi incluido com JS") // cria o conteudo

novoParagrafo.appendChild(novoTexto); // pega a tag e junta como o conteudo utilizando o appendChild

var corpo = document.querySelector("body"); // selecionar a tag pai para que seja colocado o filho (p)

corpo.appendChild(novoParagrafo); // junta o conteudo que foi feito no "p" dentro da tag pai



// incluir conteudo dentro de uma teg ja criada dentro do html 

var conteiner = document.getElementById("espaço"); // cria uma variavel com a tag do html

var cont = document.createElement("h3") // cria a tag com o js

cont.appendChild(document.createTextNode("Incluir conteudo dentro de uma tag que ja existe no HTML")) // cria o conteudo que sera colocada na var do conteudo

conteiner.appendChild(cont); // coloca o conteudo criado dentro da tag div

//mais texto

var prg = document.getElementById("prg")

var cont2 = document.createTextNode("Novo paragrafo dentro da div")

prg.appendChild(cont2)

