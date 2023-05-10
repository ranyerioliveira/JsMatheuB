document.write("<h1>O operador NOT (negação) vai mudar o valor da expressão, se o valor é true ele transforma para false, o simbolo do NOT é a !</h1>")

if(!true){
    console.log("Passou")
}else{
    console.log("Não Passou")
}

var nome = "Ranyeri";

if(!(nome === "Ranyeri")){
    console.log("Seu nome ta certo");// com a negação a expressão foi invetida
}else{
    console.log("Esse é seu nome");
}