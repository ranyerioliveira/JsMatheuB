document.write("<h1>Metodos de string - parte 2</h1><p>toLowerCase: Todas as letras ficam minusculas, precisa colocar as () no final do toLowerCase</p><p>toUpperCase</p>")

var frase = "ESSA FRASE VAI FICAR TUDO CAIXA BAIXA"

console.log(frase);
console.log(frase.toLocaleLowerCase())

var frase2 = "não sei nem com dizer, só sei que foi assim"

console.log(frase2);
console.log(frase2.toUpperCase());

var fraseCaixaBaixa = frase.toLocaleLowerCase(); // atribuição de uma variavel

console.log(fraseCaixaBaixa);


