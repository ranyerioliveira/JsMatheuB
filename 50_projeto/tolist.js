//adicionar a tarefa

//função de adicionar tarefa

function addTask(){

    //titulo da tarefa
    const taskTitle = document.querySelector("#task-title").value;//o value serve para pega o valor do input
    console.log(taskTitle)
}

//evento de adicionar tarefa

const addBtn = document.querySelector("#add-bnt");

addBtn.addEventListener("click", function(e){// adicionar evento ao botão

    e.preventDefault(); //não submeter ao formulario, quando aperta o btão ele não vai 

    addTask()

})