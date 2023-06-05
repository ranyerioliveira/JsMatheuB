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
    dizerNome: function(){
        console.log("O meu nome é "+ this.nome);
    },
    aniversario: function(){
        this.idade += 1;
    },
    saudacao: function(){
        return "Sr." + this.nome;
    }
};

pessoa.dizerNome();

console.log(pessoa.idade);

pessoa.aniversario();

console.log(pessoa.idade);

var sdc = pessoa.saudacao();

console.log("Olá " + sdc);
