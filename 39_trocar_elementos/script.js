// trocar elementos

//cria um elemento

var el = document.createElement("h3")

el.classList = "testando-classe"

var texto = document.createTextNode("Trocando uma tag")

el.appendChild(texto);

console.log(el)

// Selecionar o elemento do HTMl que será trocado

var title = document.querySelector("#title");

console.log(title);

//Selecionar o pai, que nesse caso é o body

var pai = title.parentNode; //isso ja seleciona diretamen a tag pai do elemento 

// trocar o elemento 

pai.replaceChild(el, title) //sleciona primeiro a tag que vai substituir e depois a que vai ser substituida

console.log("teste")







