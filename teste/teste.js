//boolear

/*var num1 = 5;
var num2 = 4;

console.log(5>4);

var comparacao = 5>4;

console.log(typeof comparacao)

//object

var obj = {
    nome:"Safira",
    peso: 3,
    tipo: "nenem",
}

console.log(obj);

console.log(obj.tipo);

//array

var arr = ["Ranyero", 34, "TI", "masculino"]

console.log(arr);

console.log(arr[1]);

//if

var numero1 = 1;

var numero2 = 3;

if(numero1 > numero2){
    console.log("Verdadeiro")
}else{
    console.log("Falso")
};

if(numero1 < numero2){
    console.log("O numero 2 é maior que o 1")
} else if(numero1 === numero2){
    console.log("Os numeros são iguais")
}else{
    console.log("O numero 1 é maior que 2")
};

// if comparação

if(numero2 === 3){
    console.log("Esse numero é igual")
}else if(numero2 !== 3){
    console.log("O numero é diferente")
}

//operador AND &&

var x = 4;
var r = 4;
var z = 3;
var y = "Ranyeri"

if(x === r && r <= z ){
    console.log("Expressões iguais")
} else{
    console.log("Não é verdadeira")
}; // as expressões tem que ser verdadeiras

//operador OR ||

if(x === 4 || r < 2){
    console.log("O OR é verdadeiro")
}

// uma das expressões tem que ser verdadeira

//NOT !

if(!(x !== r)){
    console.log(true)
};

var rep = 0;

//Estrutura de repetição com while

while(rep <= 5){
    console.log(rep)
    rep++
}//contagem de numeros

var meuNome = "Jetro";

var rp = 0;

while(rp< 5){
    console.log(meuNome[rp])
    rp++;
}//repetição com strings seperando cada letra

var array = ["Jessica", 45, "Adm", 1.801];

var v = 0;

while(v < 4){
    console.log(array[v]);
    v++
}//estrutura de repetição com array

//peradores de atribuição

var x = 10;
var y = 12

//console.log(x = x + y);

//ou

console.log(x += y);
console.log(x -= y);

//for

var sasa = "Safira"

for(var s = 0; s <= sasa.length; s++){
    console.log(sasa[s]);
};

for(var f = 0; f <= 10; f++){
    console.log("O numero é o " + f)
};

var arr = ["Safira", "Ágatha", "Nathalie", "Karen"];

for(var n = 0; n < arr.length; n++){
    console.log(arr[n])
};

//break e continue*/

// alterando conteudo no html

var texto = document.createElement("p")

console.log(texto)

var conteudo = document.createTextNode("Novo texto");

texto.appendChild(conteudo);

var corpo = document.querySelector("body")

corpo.appendChild(conteudo);

var titulo = document.createElement("h2")

var textoTitulo = document.createTextNode("Novo titulo");

titulo.appendChild(textoTitulo);

var corpo2 = document.querySelector("header");

corpo2.appendChild(textoTitulo)