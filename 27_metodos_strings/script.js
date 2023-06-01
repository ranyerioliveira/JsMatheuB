document.write("<h1>Metodos Strings</h1><p>length: conta a quantidades de caractereris tem na string </p><p>indexOf: Mosta pela posição qual é o caracteris, utiliza p [], ou tambem pode verificar quando começa uma frase var frase = 'Eu vou ser um programador 'console.log(frase.indexOf('ser'))</p><p>slice: Extrair uma palavra da frase</p><p>replace: Serve para substituir uma frase na frase</p>")


//length
var nome = "Agatha";


console.log(nome.length);

//indexOf

var nome2 = "Safira";

console.log(nome2[2]);

var frase = "Eu vou ser um programador"

console.log(frase.indexOf("ser"))

//slice

var ser = frase.slice(7, 11);

console.log(ser)

//replace

var novaPalavra = frase.replace("programador", "pai");

console.log(novaPalavra);//







