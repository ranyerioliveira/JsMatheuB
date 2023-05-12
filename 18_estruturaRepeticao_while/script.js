document.write("<h1>A estrutura em repetição while</h1><p>A palavra while é reservada para a função de repetição</p>")

var x = 0

while(x <= 6){

    console.log("Testando o numero de repetição" + ' ' + x);

    // Para uma repetição precisa de um incrementador que dara o start para a função que é o exemplo abaixo do x++ (x é a variavel)

    x++;

}

var arr = ["Ranyeri","teste", "testando", "A", "B"];
var y = 0;

while(y <4){
    console.log(arr[y]);
    y++;
}

document.write('<p style= "color: red;">No JavaScript tem como acessar uma letra de uma string utilizando tmb a estrura de repetição</p>')

var nome = "Ranyeri";
var n = 0;

while(n < 7){

    console.log(nome[n]);

    n+=1; // o ++ tmb pode ser usado o +=
}

var z = 0

while(z <= 6){

    console.log("O numero"+ " " + z)

    z++;
}





