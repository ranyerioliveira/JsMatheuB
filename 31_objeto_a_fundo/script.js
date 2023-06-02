document.write("<h1>Criando meu proprio obejto</h1><p></p>")

let pessoa = {
    nome: "Ranyeri",
    idade: 34,
    peso: 80,
    frase: function(){
        console.log("Essa é uma função dentro de um objeto");
    },
    soma: function(a, b){
        return a + b;
    },
};

console.log(pessoa);
pessoa.frase();

var soma = pessoa.soma(2, 2);

console.log(soma);

function teste(x, y){
    return x - y;
}

var t2 = teste(4, 1);

console.log(t2);






