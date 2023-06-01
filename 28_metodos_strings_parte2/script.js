document.write("<h1>Metodos de string - parte 2</h1><p>toLowerCase: Todas as letras ficam minusculas, precisa colocar as () no final do toLowerCase</p><p>toUpperCase: Deixa o texto em maiusculo</p><p>trim: Maniera de aparar os espaços da dado(frase)<p><p>split: Separa as frase em uma array</p><p>lastIndexOf: Como no idexOf, conseguimos buscar pela posição a palavra dentro da string, com o lastIndexOf conseguimos pegar a ultima para escrita no texto</p>")

//toLowerCase e toUpperCase
var frase = "ESSA FRASE VAI FICAR TUDO CAIXA BAIXA"

console.log(frase);
console.log(frase.toLowerCase())

var frase2 = "não sei nem com dizer, só sei que foi assim"

console.log(frase2);
console.log(frase2.toUpperCase());

var fraseCaixaBaixa = frase.toLowerCase(); // atribuição de uma variavel

console.log(fraseCaixaBaixa);

//trim

var nomeTrim = "    Ranyeri   "

console.log(nomeTrim);

console.log(nomeTrim.trim());

var meuNome = "     Januario    ";

console.log(meuNome);

var meuNomeTrim = meuNome.trim();

console.log(meuNomeTrim);

//split

console.log(frase.split(" "))// tada palavra que esta separada com espaço será um dado de uma array

var tag = "Console, Jogo, PC, youtuber"

console.log(tag.split(", "))

//lastIndexOf

var ultimaPalavra = "Pegar a ultima palavra do texto que tera mais palavra";

console.log(ultimaPalavra.indexOf("palavra"))// pegou a primeira palavra

console.log(ultimaPalavra.lastIndexOf("palavra"));

