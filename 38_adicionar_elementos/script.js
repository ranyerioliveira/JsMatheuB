// inserir elementos dentro de outro ou acrecentar um filho com appendChild

var el = document.createElement("div")

//propriedade classlist cria uma classe

el.classList = "div-criada";

console.log(el);

var container = document.querySelector("#container")

//colocando o elemento filho

container.appendChild(el);

//inserBefore - inserir antes

var el2 = document.createElement("div");

el2.classList = "div-before";

var el3 = document.querySelector("#container .div-before");

console.log(el3)

container.insertBefore(el2, el3)







