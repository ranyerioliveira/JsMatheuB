document.write("<h1>Uso de let e const</h1><p>O let pode ser mudado o valor da variavel igual ao var, o const é uma constante e o valor não pode ser modificado</p>")

let x = 5; // var x = 5;

console.log(x);

x = 10;

console.log(x);

if(true){

    let x = 20; // para ficar no escopo local tem que usar o let

    console.log(x);

} 

console.log(x);
