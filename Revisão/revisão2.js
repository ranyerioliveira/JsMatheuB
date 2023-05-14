document.write("<h1>Revisão</h1><h2>Tipos de dados</h2><ul><li>Number: Pode ser numeros inteiros e reais, o JavaScript reconhecer os dois</li><li>String: São os caracteres que não são numeros e que formar basicamente as palavras, são envolvidas em aspas duplas ou simples, o importante é sem utilizar no codigo um padrão de uso das aspas, se começas com um tipo termine com o mesmo tipo</li></ul>")

console.log("String");// string
console.log(typeof 30)// number

document.write("<h2>Variaveis</h2><p>Variais são utilizados para registrar o valor para posteriormente ser incluso no programa</p>")

var x = 5;// variavel 'x' declarada
var y = 2; // variavel 'y' declarada
console.log(x + y);

document.write("<h2>Boolean</h2><p>Boolean é a conceituamente inspirando na equação de boolean que é true e false, quando a expressão der verdadeira é true e quando é falso é false</p>");

console.log(true);
console.log(false);

console.log(x < y);
console.log(x > y);

document.write("<h2>Operadores de comparação</h2><p><ul><li>== ,Significa que os dois valores são iguais<li>!=, significa que os valores são diferentes</li><li>>= , Maior ou igual</li><li><=, Menor ou igual</li><li>=== , Identifica que a igualdade até no tipo do dado, se é string ou number</li><li>!== , Identifica que a diferença até no tipo do dado, se é string ou number</li></ul></p>")

console.log(x == x);
console.log(x != y);
console.log(x <= y);
console.log(x >= y);

document.write("<h2>Arrays</h2><p>Arrays são conjuntos de dados, ela é aberta com [] e cada dado é separado com ,. Se declara um array com uma variavel para que o dados seja salvo. Obs. Uma array é um object</p>")

var arr = ["Ranyeri", "TI", "Ágatha", "Safira", "Nathalie"];

console.log(arr);
console.log(typeof arr);
console.log(arr[3]); //com o uso do [] vc consegue colocar qual dados quer selecionar

document.write("<h2>Object</h2><p>Object é uma lista ordenada (Ou não) de dados pre definifdos. Para criar um objeto é nssessario declarar uma variavel depois criar um bloco com {}, dentro das chaves você declara o nome do dados seguido com seu valor, lembrando que os dados são separados por , e o : para 'juntar' o nome do dado e o valor.</p>");

var obj = {
    nome: "Ranyeri",
    idade:34,
    filha1: "Safira",
    filha2: "Ágatha",
}

console.log(obj);
console.log(obj.nome);// para acessar um dados especifico é colocar a varivial.o nome do dado selecionado
console.log(typeof obj);







