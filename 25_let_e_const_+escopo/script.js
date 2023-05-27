document.write("<h1>Uso de let e const</h1><p>O let pode ser mudado o valor da variavel igual ao var, o const é uma constante e o valor não pode ser modificado</p>")

let x = 5; // var x = 5;

console.log(x);

const y = 11;

console.log(y);
//y = 13;  valor não pode mudar a constante




x = 10;

console.log(x);

if(true){

    let x = 20; // para ficar no escopo local tem que usar o let

    console.log(x);

    const y = 50;

    console.log("const if " + y); // constante ta no escopo local, com isso nmão interfere na const y anterior

} 

console.log(x);

if(20 > 10){

    const y = 100;

    console.log("Const 2 "+y); 
}

