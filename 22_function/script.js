document.write("<h1>Functions</h1><p>São blocos de codigos que pode ser invocados e reutilizados a qualquer momento no codigo, com isso economizando no tamanho da estrutura do codigo e na manutenção do proprio.</p>")

function primeiraFuncao(){
    console.log("Função foi invocada ")
}
 primeiraFuncao();
 primeiraFuncao();
 primeiraFuncao();// agora pode chamar varias vezes a função no codigo

 document.write("<p>Dentro da função, mais especificamente nos parenteses, você coloca o argumento ou parametro</p>")

 function dizerNome(nome){
    console.log("Seu nome é : " + nome)
 };

dizerNome("Karen");
dizerNome("Safira");
dizerNome("Ágatha");

var nomeDoBancoDeDados = "Ranyeri";

dizerNome(nomeDoBancoDeDados);//Tambem pode usar variaveis no parametro




