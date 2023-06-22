//evento de click

var btn = document.querySelector("#btn")

console.log(btn);

btn.addEventListener("click", function(){

console.log("Clicou")
//console.log(this);
this.style.color = "red"// consegue modificar a propriedade utlizando a instrução "this"

}

);// adicionar um evento de click