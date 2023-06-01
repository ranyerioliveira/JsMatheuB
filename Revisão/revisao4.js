document.write("<h1>Revisão 4</h1><p>Metodos de string</p>")

//toUpperCase e toLowerCase

var frase = "essa frase ta em minusculo";

console.log(frase);

var fraseMaiusculo = frase.toUpperCase();

console.log(fraseMaiusculo);

var frase2 = "ESSA FRASE TA EM MAIUSCULO";

console.log(frase2);

var fraseMenusculo = frase2.toLowerCase();

console.log(fraseMenusculo);

//trim

var nome = "     ranyeri    ";

console.log(nome);

var nomeTrim = nome.trim();

console.log(nomeTrim);

//split

var fraseArray = frase.split();

console.log(fraseArray);

var lista = "Judith, Cachorro, Gato, Juju";

console.log(lista.split(","));

//length

var nomeFilha = "Safira"

console.log(nomeFilha.length);

//indexOf

console.log(nomeFilha[3]);

var fraseIndexOf = "Essa frase serve para essa parte do estudo";

console.log(fraseIndexOf.indexOf("frase"));

//slice

console.log(fraseIndexOf.slice(5, 10));



