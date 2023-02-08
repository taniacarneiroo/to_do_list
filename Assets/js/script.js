/*
entrada de dados
faz alguma coisa com estes dados
exibe/grava em algum lugar
*/

/*Criar função para armazenar o que for inserido no index.html */
let tarefas = [];

function adicionarTarefas(event){
    let tarefa = document.querySelector('#tarefa');

  

if (event.key == 'Enter' || event.type == 'click')

{
    

    tarefas.push(
        {
            titulo: tarefa.value,
            status: 'à executar'
        }
        )
        tarefa.value=''; 

        exibeTarefas();

       
    }}
       
function exibeTarefas(){
    let cardTarefas = document.querySelector('section');

    cardTarefas.innerHTML = '';
    
    for(let task of tarefas){
        cardTarefas.innerHTML +=
       `<span>
            <p> ${task.titulo}</p>
            <p onclick='alteraStatus(event)'>${task.status}</p>
            <button onclick='editarTarefas()'>Editar</button>
            <button onclick='excluiTarefas(event)'>Excluir</button>
        </span>`;
    }}
/*event captura o evendo (click)*/
function excluiTarefas(event){
    let elementoPai = event.target.parentNode;

    let tituloTarefa = elementoPai.children[0].innerText;
    let statusTarefa = elementoPai.children[1].innerText;

    if(statusTarefa ==='Feito'){
        alert('Não é possível excluir a tarefa com o status' + statusTarefa);
        return;
    }

for (let [index,tarefa] of tarefas.entries()){
    if(tituloTarefa === tarefa.titulo) {
        tarefas.splice(index,1);
    }
};

elementoPai.remove();

}
/*innerText, insire um texto
innerHTML, insere um códigoHTML*/

function alteraStatus(event){
    
 
    let status = event.target.innerText;

    let elementoPai = event.target.parentNode;
    let tituloTarefa = elementoPai.children[0].innerText;

    switch( status){
        case 'à executar' : status = "executando"; break;
        case 'executando' : status = "feito"; break;
        case 'feito' : alert ( `O status ${status} não poderá ser alterado`); break;
        default : alert ( `O status ${status} não poderá ser alterado`); 
    }

    for (let valor of tarefas)
    {
        if (tituloTarefa == valor.titulo){
        valor.status = status;
        event.target.innertText = '';

        console.log(event.target.innerText)
        }
    
    }
    

}

