document.write("Array = [], objetos {}, uma array aceita qualquer tipo de dados, até mesmo um objeto");

var teste = ['Ranyeri', 'João', 'Marcio', 0 ];

console.log(teste)
console.log(typeof teste);


document.write("<br>Para acessar algum elemento da uma array se chama a array declara e em saguida o item em []");

console.log(teste[2]);
console.log(teste[0]);

//abaixo como insserir um indici novo, sem o var.

teste[4] = "Natal";
console.log(teste);

teste[1] = "Karen";
console.log(teste);