document.write("<h1>Metodos de arrays</h1><p>length: Contagem de itens dentro de uma array</p><p>push: Incluir um ou mais item no final de uma array</p><p>pop: Metodo que retira o ultimo elemento que foi incluido</p><p>unshift: Adiciona um item no começo do array</p><p>shift: Ele remove no inicio da array</p><p>Acessar o ultimo elemento com length e o -1</p>")

//length

var contagem = [1, 2, 3, "Ranyeri", 5, "Karen"]

console.log(contagem);// array

console.log(contagem.length); //quantidade de itens

//push

contagem.push("Safira");

console.log(contagem);

//pop

contagem.pop();

console.log(contagem);

//unshift

contagem.unshift("Ágatha");

console.log(contagem);

//shift

contagem.shift();

console.log(contagem);

//Acessar o ultimo elemento

console.log(contagem[contagem.length -1]);





