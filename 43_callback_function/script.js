// callback function

function exibir(num){
    var conteudo = document.getElementById("cont");
    var texto = document.createTextNode(" - Esse é o resultado: " + num );
    conteudo.appendChild(texto);
    console.log("O resutado da operação é  " + num)
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




