

document.write("<h2>OR ||</h2><p>Caso uma das expresões der true e a outra der falso a função sera executada se tiver o || or</p>");

document.write("<p>Quando uma das funções dar true e a outra da false, resultado que a função é execultada</p>");

/*var idade = 19;
var nome = "João";

if(nome =="Carlos" || idade >= 18){
    console.log("Ja pode ir para a balada")
}else{
    console.log("Não pode entrar")//caso as expressões sejam false
};*/

/*var idade = 18;
var auto = true;

if(idade >= 18 || auto == true){
    console.log("Pode ir para balada")
} else{
    console.log("Não pode ir para a balada")
}*/

/*var peso = 45;
var dieta = true;
var nome = "Ranyeri";

if(peso >= 45 && nome == "Ranyeri" || dieta == true){
    console.log("tem que fazer dieta")
} else{
    console.log("Não precisa fazer dieta")
};*/

document.write("<p>O mais indicado é isolar as operações caso tenha mais operadores envouvidos</p>")

var salario = 2000;
var cargo = "Professor";
var vr = false;

if ((salario <= 2000 && cargo ==="Professor") || vr === true ){
    console.log("Ganha VR");
}else{
    console.log("Agora você ganha VR");
}

