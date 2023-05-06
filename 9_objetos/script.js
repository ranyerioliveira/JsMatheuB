document.write("Um obejto é determinado com ta uma variavel em '{}', cada item é saparado com vigula e para separar a declaração do dado utiliza o ':'");

var obj = {
    nome: "Ranyeri",
    idade: 34,
    profissao: "Programador",
    estaTrabalhando: false,
}

console.log(obj);
console.log(typeof obj);

document.write("<br> <br>")
document.write("Para acessar um objeto se coloca o '.' entre a variavel e objeto que você que invocar")

console.log(obj.idade);
console.log(obj.nome);
console.log(obj.profissao);

console.log("Minha profissão é" + ' ' + obj.profissao);

obj.nome = "Karen";
console.log(obj);

obj.graduacao = "Superior";
console.log(obj);




