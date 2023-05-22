document.write("<h1>For na pratica</h1><br><p>Utilizando o que foi estudado até agora na prática.</p>")

var lista = ["Laranja", "Maçã", "Pera", "Jaca", "Limão","Ranyeri"]

//inserir no HTML

var listaUl = document.createElement("ul");

var body = document.getElementsByTagName("body");

//console.log(body[0]);

// incluir a lista no html no body

body[0].appendChild(listaUl);

var listaNoBody = document.getElementsByTagName("ul");

console.log(listaNoBody[0]);

for (var i = 0; i < lista.length; i++){

    var liFor = document.createElement("li");

    var textoLi = document.createTextNode(lista[i]);

    liFor.appendChild(textoLi);

    listaNoBody[0].appendChild(liFor);
}



