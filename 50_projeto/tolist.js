//adicionar a tarefa

//função de adicionar tarefa

function addTask(){

    //titulo da tarefa
    const taskTitle = document.querySelector("#task-title").value;//o value serve para pega o valor do input
   
    if(taskTitle){

        //clonar o template

        const template = document.querySelector(".template");

        const newTask = template.cloneNode(true);

        //adicionar titulo
        newTask.querySelector("#task-list").textContent = taskTitle;// foi defindo la em topo

        //remover as classes desenessarias 
        newTask.classList.remove("template");
        newTask.classList.remove("hide");

        //adicionar tarefa da lista ----(parei aqui)-----


    }
}

//evento de adicionar tarefa

const addBtn = document.querySelector("#add-bnt");

addBtn.addEventListener("click", function(e){// adicionar evento ao botão

    e.preventDefault(); //não submeter ao formulario, quando aperta o btão ele não vai 

    addTask()

})