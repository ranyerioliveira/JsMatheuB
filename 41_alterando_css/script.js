//slecionando elemento que será modificado com o css

var title = document.querySelector("#title");

//adicionar o estilo

title.style.color = "blue" // varivel, css e o atributo.

title.style.backgroundColor = "yellow" // quando a popriedade tem mais de uma palavra e separa por traço no CSS, no JS se escreve com camel case.

var corpo = document.querySelector("body")

corpo.style.backgroundColor = "red";


// adicionar varios estilos de CSS

var frase = document.querySelector("#cor");

frase.style.cssText = "color: white; background: blue; font-size: 40px; text-align:center;";