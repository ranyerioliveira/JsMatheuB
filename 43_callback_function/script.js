// callback function

function exibir(num){
    console.log("O resutado da operação é " + num)
}



function soma(a, b, callback){
    var op = a + b;
    callback(op);
}

function multiplicacao(a, b, callback){
    var op = a * b;
    callback(op);
}

soma(2, 2, exibir)

multiplicacao(4, 4, exibir);




