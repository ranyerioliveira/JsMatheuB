document.write("<h1>Revisão 3</h1><h2>Função</h2><p>Function: é uma forma de padronizar uma função especifica e utilizar ela quando quiser no codigo.</p>")

function nome(){
    var x = "Ranyeri";
    document.write(x)
}

//nome();

function teste(){
    var n = "Safira";
    var conteudo = document.querySelector("#testeNome")
    conteudo.textContent = n;
}

//teste();

document.write("<h3>Parametro</h3><p>Da pra colocar parametros na função que pode ser utilizada ao decorrer do codigo, como por exemplo uma soma, é só colocar variaveis para alocar o dado.</p>")

function parametro(a, b){
    var parametro = a + b;
    return parametro;
}

var soma = parametro("Ranyeri ", "Oliveira");

console.log(soma)

var soma2 = parametro(20, 10);

console.log(soma2);

