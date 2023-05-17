document.write("<h1>Estudo de Break e Continue</h1><p>O Break é para parar serve para parar o loop no for ou no while</p><p>O Continue serve para pular o um valor especifico no loop</p>")

for(var i = 10; i > 0;i-- ){

   console.log(i);
   
   if(i === 4){
      break;
   }
}

console.log("Deu o break")

x = 0;
while(x <100){

   x+=10

   if(x === 50 || x=== 30){
      console.log("CONTINUE")
      continue;
   }

   console.log("testenado continue " + x)
   
}