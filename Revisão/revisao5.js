//incluir um elemento html com js

var novoParagrafo = document.createElement("p"); // cria a tag (elemento)

var novoTexto = document.createTextNode("Esse é o texto que foi incluido com JS") // cria o conteudo

novoParagrafo.appendChild(novoTexto); // pega a tag e junta como o conteudo utilizando o appendChild

var corpo = document.querySelector("body"); // selecionar a tag pai para que seja colocado o filho (p)

corpo.appendChild(novoParagrafo); // junta o conteudo que foi feito no "p" dentro da tag pai

