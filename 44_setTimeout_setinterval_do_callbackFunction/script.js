// setTimeout e serInterval no callback function

//setTimeout

console.log("Antes do setTimeout")

setTimeout(function() {

    console.log("testando o setTimeout");

}, 3000); // um segundo = 1000, 1 = a milisegundo

console.log("Depois do setTimeout")

//setInterval

setInterval(function(){
    console.log("Testando o setInterval")

},
2000)

