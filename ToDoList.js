//To do list 
const todoInputDisplay = document.querySelector('.todo_input');
const todoButton = document.querySelector('.todo_button'); // the plus button
const todoList = document.querySelector('.todo_list');
const filterOption= document.querySelector('.filter_todo');



todoButton.addEventListener("click", addTodo); // when clicked on the plus button
todoList.addEventListener('click', deleteCheck);
filterOption.addEventListener('click', filterTodo);

function addTodo(event){
    event.preventDefault();


    if (todoInputDisplay.value=== ''){
        return;
    }
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');

    const newTodo = document.createElement('li');
    newTodo.innerText = todoInputDisplay.value;
    newTodo.classList.add('todo-itemName');
    todoDiv.appendChild(newTodo); // newTodo is an clild element of todoDiv


   


    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class ="fas fa-check"></i>';
    completedButton.classList.add('complete_btn');
    todoDiv.appendChild(completedButton);


    const deleteButton = document.createElement('button');
    deleteButton.innerHTML = '<i class ="fas fa-trash"></i>';
    deleteButton.classList.add('delete_btn');
    todoDiv.appendChild(deleteButton);


    todoList.appendChild(todoDiv) // todoDiv is an clild element of todoList

    todoInputDisplay.value='';
}


function deleteCheck(e){
    const itemName = e.target;

    if(itemName.classList[0] === 'delete_btn'){
        const todo = itemName.parentElement;

        todo.classList.add('fall');
        removeLocalTodos(todo);
        todo.addEventListener('transitionend', function(){
            todo.remove();
        });
    }

    if(itemName.classList[0] === 'complete_btn'){
        const todo = itemName.parentElement;
        console.log(todo)
        todo.classList.toggle('completedItem');
    }
}

function filterTodo(e){
    const todos = todoList.childNodes;
todos.forEach(function(todo){
switch(e.target.value){
    case "all":
        todo.style.display ='flex';
        break;

    case "completed":
        if(todo.classList.contains('completedItem')){
            todo.style.display = 'flex';
        }
        else{
            todo.style.display = 'none';
        }
     break;

    case "uncompleted":
        if(!todo.classList.contains('completedItem')){
            todo.style.display = 'flex';
        }
        else{
            todo.style.display = 'none';
        }  
        break;

    default:
        return;
    }
});
}

/*
<div class = 'todo'>
    <li class='todo-item'>hey</li>
</div>
*/
