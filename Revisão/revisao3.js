document.write("<h1>Revisão 3</h1><h2>Função</h2><p>Function: é uma forma de padronizar uma função especifica e utilizar ela quando quiser no codigo</p>")

function nome(){
    var x = "Ranyeri";
    document.write(x)
}

nome();

function teste(){
    var n = "Safira";
    var conteudo = document.querySelector("#testeNome")
    conteudo.textContent = n;
}

teste();