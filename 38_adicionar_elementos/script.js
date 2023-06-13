// inserir elementos dentro de outro ou acrecentar um filho com appendChild

var el = document.createElement("div")

//propriedade classlist cria uma classe

el.classList = "div-criada";

console.log(el);

var container = document.querySelector("#container")

//colocando o elemento filho

container.appendChild(el);






