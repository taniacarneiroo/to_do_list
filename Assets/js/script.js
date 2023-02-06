/*
entrada de dados
faz alguma coisa com estes dados
exibe/grava em algum lugar
*/

/*Criar função para armazenar o que for inserido no index.html */
let tarefas = [];

function adicionarTarefas(){
    let tarefa = document.querySelector('#tarefa');

    tarefas.push(
        {
            titulo: tarefa.value,
            status: 'à executar'
        }
        )
        tarefa.value='';

        exibeTarefas();
    }
       
function exibeTarefas(){
    let cardTarefas = document.querySelector('section');

    cardTarefas.innerHTML = '';
    
    for(let task of tarefas){
        cardTarefas.innerHTML +=
       `<span>
            <p> ${task.titulo}</p>
            <p onclick='alteraStatus()'>${task.status}</p>
            <button onclick='editarTarefas()'>Editar</button>
            <button onclick='excluiTarefas()'>Excluir</button>
        </span>`;
    }

    
}





