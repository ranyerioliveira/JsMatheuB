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


var el = document.createElement("p")

var tex = document.createTextNode("teste pra saber se ta sabendo");

el.appendChild(tex);

corpo.appendChild(el)



// alterando elemento do html

var modi = document.getElementById("modi");// pega a tag do html que ta com o ID

modi.innerHTML = "Novo texto"; // coloca o novo texto ou dado no html



//remover elemento

var remover = document.getElementById("remover");
var paragrafoRemovido = document.getElementById("paragrafoRemovido")

remover.removeChild(paragrafoRemovido)



// adicionar elemento, e criar classe ou id

var elemento = document.createElement ("div");//cria a tag
elemento.classList = "div-criada";// adiciona a classe a tag
var elementoTexto = document.createTextNode("Adicionando elementos")//criando texto
elemento.appendChild(elementoTexto); //colocando o texto no elemento
corpo.appendChild(elemento);//colocando a tag dentro da tag pai



// trocar elemento

//criando o que vai substituir
var criar = document.createElement("button");
criar.classList = "botao"
var botaoTexto = document.createTextNode("Clique aqui")
criar.appendChild(botaoTexto);

//selecionar o que vai ser substituido

var subs = document.getElementById("substituir")

corpo.replaceChild(criar, subs)

//alterando atributo

criar.setAttribute("disabled", "disabled");// sleciona o elemento, coloca o setAttribute e depois os atributos que quiser



//Alterando CSS


//corpo.style.backgroundColor = "blue" 
//corpo.style.color = "white"

corpo.style.cssText = "background: blue; font-size: 25px; color: white"

cont.style.textAlign = "center"

//propriedade document

console.log(document.body)






