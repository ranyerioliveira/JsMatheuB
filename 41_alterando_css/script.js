//slecionando elemento que será modificado com o css

var title = document.querySelector("#title");

//adicionar o estilo

title.style.color = "blue" // varivel, css e o atributo.

title.style.background = "yellow"

var corpo = document.querySelector("body")

corpo.style.background = "red";


// adicionar varios estilos de CSS

var frase = document.querySelector("#cor");

frase.style.cssText = "color: white; background: blue; font-size: 40px; text-align:center;";