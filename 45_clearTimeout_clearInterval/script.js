// clearTimeout e clearInterval


//clearTimeout

var x = 0;

var myTime = setTimeout(function(){
    console.log("O x é igual a 0")
},1500);

x = 5;

if(x > 0){
    clearTimeout(myTime);
    console.log("o X passou de 0")
}

//clearInterval

var myInterval = setInterval(function(){

    console.log("Imprimindo intervalo");

},500);

setTimeout(function(){

    console.log("Não precisa mais repetir");
    clearInterval(myInterval);

},4500);

