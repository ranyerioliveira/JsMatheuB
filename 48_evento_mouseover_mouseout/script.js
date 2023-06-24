//evento de mouseover e mouseout

//mouseover

var title = document.querySelector("#title");

title.addEventListener("mouseover", function(){

    this.style.backgroundColor = "red";
}


);

//mouseout

title.addEventListener("mouseout", function(){

    this.style.backgroundColor = " rgb(234, 0, 255)"

}
);

//basicamento o codico assima reproduz um hover de css


//afetar outro elemento com mouseover
//quando passar pelo subtitulo o texto vai sumir

var subtitulo = document.querySelector("#subtitulo") //seleciona o subtitulo que o mouse vai passar

//agora é criar o enveto
subtitulo.addEventListener("mouseover", function(){

    var legenda = document.querySelector("#legenda");//adiciona a legenda que foi criada com id e class
    legenda.classList.remove("hide") //cria o metodo para remover a class
}

)
// para aparece novamento
subtitulo.addEventListener("mouseout", function(){

    var legenda = document.querySelector("#legenda");//adiciona a legenda que foi criada com id e class
    legenda.classList.add("hide") //cria o metodo para adicionar a class
}

)