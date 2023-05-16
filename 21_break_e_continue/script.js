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