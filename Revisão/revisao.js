document.write("<h2>Variaveis</h2><br><p>Existe 3 tipos de variaveis, let, var e const. let e var são variaveis que o seu valor podem ser modificados ao decorrer do codigo, já o const não pode ser modificado</p><br>");
/*let nun = 5;
 
console.log(nun);

nun = 4; 

console.log(nun);

var nun2 = 6;
 
console.log(nun2);

nun2 = 7; 

console.log(nun2);

const nome = "Ranyeri";

console.log(nome);

nome = "Karen";

console.log(nome);*/

document.write("<h2>Como indentificar tipo do dado</h2><br><p>O typeof é colocado </p><br>");

/*var numero = 5;

console.log(typeof numero)

var string = "Ranyeri";

console.log(typeof string);

var array = ["Juliana", "Administrador", 18, "Historiaa"]

console.log(array);

console.log(typeof array);

let objeto = {
    idade: 18,
    nome: "Ranyeri",
    profissao: "TI",
    peso: 8,

}

console.log(objeto);
console.log(typeof objeto);*/

document.write("<h2>Boolean</h2><br><p>Boolean é a função que identifica um dados se é verdadeiro ou falso, na teoria é binario 0 ou 1</p>")

/*var nun1 = 10;
var nun2 = 8;
console.log(nun1 < nun2);
//
let verdadeiro = true;
console.log(verdadeiro);
console.log(typeof verdadeiro);
//
let falso = false;
console.log(falso);
console.log(typeof falso);*/

document.write("<h2>Arrays e Objetos</h2><p>Array é um uma listagem e é aberto com '[]' de objetos que é usado em ordem que começa em '0', ja objeto ja o dados é nomeado e é aberto com '{}'</p>");

/*var array = ["Ranyeri", 34, "TI", "Programação"];
console.log(array);
console.log(typeof array);*/

document.write("<p>Para selecionar um dados da array é só colocar '[]' apos a declaração da variavel na função</p><br>")

/*console.log(array[3]);// vai pegar o dados programação

var objeto = {
    nome:"Ranyeri",
    idade: 34,
    sexo: "Masculino",
    profissao: "TI",
}

console.log(objeto);
console.log(typeof objeto);

console.log(objeto.profissao); //para pegar um unico objeto, se coloca a "variavel" seguindo do ponto e o objeto desejado*/

document.write("<h2>Operadores</h2><br><p>== Igual</p><p>!= diferente</p><p>>= Maior ou igual</p><p><= Menor igual</p><p>=== Igual conferindo o dados(mais indicado que o ==)</p><p>!== Diferente conferindo dados(mais indicado que o !=)</p> <p>> Maior</p> <p>< Menor</p><br>")

document.write("<h2>If, else If e else</h2><br>")

/*var numero1 = 10;
var numero2 = 15;

console.log(numero1>numero2);

console.log(typeof numero1);
console.log(typeof numero2);

console.log(numero1<numero2);

console.log(numero1 === numero2);
console.log(numero1 !== numero2);

if(numero1 >= 10){
    console.log("O numero é maior que 10")
} else if(numero1 < 10){
    console.log("O numero é menor que 10")
} else{
    console.log("Não tem numero ai")
}*/

/*let idade = 18;
let info = "Não tem informação";

if(idade >= 18){
    console.log("Ele pode dirigir");
}else if( idade <= 17){
    console.log("Não pode dirigir")
} else{
    console.log(info);
}*/

/*var idade = 15;

if(idade === 15){
    console.log("Esse numero é igual")
}
*/
document.write("<h2>AND(&&), OR(||) e NOT(!)</h2><p><ul><li>O operador AND ou &&, é utilizada para verificar se as  expressões são true, se um der false ela não vai ser execultada</li></ul></p>")

/*var peso = 80;
var idade = 18;

if(peso >= 80 && idade <=18){
    console.log("Tem que fazer dieta");
}else{
    console.log("Não precisa fazer dieta")
};*/

document.write("<ul><li>O operador OR ou ||, é quando qualquer expressão da operação der verdadeira</li></ul")

/*if(peso == 80 || idade >=19){
    console.log("Dieta ok")
}else{
    console.log("Não precisa da dieta agora")
}// veja que uma expressão é true e a outra é false*/

document.write("<ul><li>O operador NOT ou !, o valor da expressão é invertido, se ela for true a mesma vira false</li></ul>")

/*if(!(peso == 80 && idade ==18)){
    console.log("true que virou false")
}else{
    console.log("False que virou true")
}*/

document.write("<h2>While - Estrutura de repetição</h2><p>Para incrementar um repetição é não gerar um loop infinito, é importante colocar um incrementador que é a variavel mais o ++, -- ou += -= e etc</p>");

var x = "Karen";
var k = 0;

while(k<5){
    console.log(x[k])

    k++;
}

var n = 25;
var r = 0;

while(r<=4){
    console.log(n[r]);

    r++;
}
