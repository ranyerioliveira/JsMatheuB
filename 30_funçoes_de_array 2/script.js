document.write("<h1>Funções de arrays</h1><p>splice: Adicionar elemente entre os elementos de uma array </p><p>indexOf: Mostra a posição do elemento</p><p>join: Transforma uma array em uma string</p><p>reverse: inverter as posições da array</p>")

//splice

var arr = [1, 2, 3, 4, 5];

arr.splice(4, 0, "Elemento"); // 1º numero é a posição, o 2º é se é para deletar um elemento e o 3º é o elementos que tem que incluido

console.log(arr);

arr.splice(5, 1);

console.log(arr);

//indexOf

console.log(arr.indexOf(3));

//join

var arr2 = ["Eu", "ainda", "não", "sou", "programador"]

console.log(arr2.join(" "))// tem qua colocar as aspas duplas pq é ela que dara a indicação do texto.


//reverse

console.log(arr.reverse());




