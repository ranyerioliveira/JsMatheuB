//evento de click

var btn = document.querySelector("#btn")

console.log(btn);

btn.addEventListener("click", function(){

console.log("Clicou")
//console.log(this);
this.style.color = "red"// consegue modificar a propriedade utlizando a instrução "this"

}

);// adicionar um evento de click

var title = document.getElementById("title")

title.addEventListener("click", function(){
    //console.log("clicou no titulo")

    var subtitulo = document.getElementById("subtitulo")
    subtitulo.style.display = "none" // da para colocar função de sumir com um outro elementos clicando em outro

})