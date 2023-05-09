var idade = 16;
var nome = "João";

if(idade === 16 && nome === "João" ){
    console.log("O João pode entrar na esgrima")
}

if((1==1 && 4>3) && 4!=2){
    console.log("Numeros validos")
};
if(1!=2 && 4>3 && 3>=2){
    console.log("Tudo falso") // se não der essa função sera puxada a outra (Else if)
} else if(nome === "João" && idade >= 14){
    console.log("Pessoa passou nos requisitos")
}