document.write("<h1>This</h1><p></ p>")

var teste = 5;

console.log(this.teste);



//console.log(this);

//alert("ola");
//this.alert("ola 2");

let pessoa = {
    nome: "Ranyeri",
    idade: 34,
    peso: 80,
    frase: function(){
        console.log("Essa é uma função dentro de um objeto");
    },
    
};

