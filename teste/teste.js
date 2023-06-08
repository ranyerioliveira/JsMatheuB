//boolear

var num1 = 5;
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



