//eventos de teclado keydown keyup 

document.addEventListener("keydown", function(event){

    console.log(event.key)

});

//keyup

document.addEventListener("keyup", function(e){
    if(event.key === "Enter"){
        console.log("Soltou o enter")
    }
})

document.addEventListener("keyup", function(f){
    if(event.key === "f"){
        console.log("Soltou o f")
    }
})