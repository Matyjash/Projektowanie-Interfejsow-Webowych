"use strict";

const listOfTODOS = document.getElementById("todo-list");
const todoText = document.getElementById("todo-text");

let elementToDelete;
let deletedTodo;
let emptyTrash = true;


$('#undo').click( function(){
    emptyTrash = true;
    deletedTodo.css('visibility', 'visible');
    deletedTodo = undefined;
    $(this).prop('disabled', true);
}); 

//po potwierdzeniu usunięcia
$('#modal-yes').click( function(){
    
    if(!emptyTrash){
        deletedTodo.remove();
        deletedTodo = elementToDelete;
        deletedTodo.css('visibility', 'hidden');
    }else{
        deletedTodo = elementToDelete;
        deletedTodo.css('visibility', 'hidden');
        emptyTrash = false;
        $('#undo').prop('disabled', false);
    }
    $('#modal').toggle("slow");
}); 

$('#modal-no').click( function(){
    $('#modal').toggle("slow");
}); 

//przenoszenie elementu do kosza po naciśnięciu przycisku
$(document).on('click','.delete-button',function(){
    elementToDelete = $(this).parent();
    $('#modal').toggle("slow");
}); 

const add = () => {
    if(!emptyTrash){
        deletedTodo.remove();
    }
    emptyTrash = true;
    $('#undo').prop('disabled', true);

    if(todoText.value !== ""){

    const todo = document.createElement("li");
    
    //Przycisk usuwania
    const deleteButton = document.createElement("button");
    deleteButton.classList.add("delete-button");
    deleteButton.classList.add("btn");
    deleteButton.classList.add("btn-light");
    deleteButton.innerHTML = "X";

    const text = document.createElement("task");
    text.classList.add("task");

    text.innerHTML = todoText.value;
    
    //przekreślanie elementu i dodawanie daty po naciśnięciu na zadanie
    text.addEventListener("click", ()=>{
        if(text.classList.contains('striked')){
        text.classList.remove('striked');
        text.innerHTML = text.innerHTML.slice(0, -13);
        }else{
        text.classList.add('striked');
        text.innerHTML += " (" + new Date().toISOString().slice(0,10)+")";
        }
    });
    
    todo.appendChild(text);
    todo.append(deleteButton);
    listOfTODOS.append(todo);

    }
}

const searchInList = () => {
    const input = document.getElementById('search-text');
    let filter;

    if(!document.getElementById('flexCheck').checked){
        filter = input.value.toUpperCase();
    }else{
        filter = input.value;
    }

    let elements = listOfTODOS.getElementsByTagName('li');
    let i;
    for (i =0; i<elements.length; i++){
        let element = elements[i];
        let textValue = element.textContent || element.innerText;

        if(!document.getElementById('flexCheck').checked){
            textValue = textValue.toUpperCase();
        }

        if (textValue.indexOf(filter) > -1){
            elements[i].style.display = "";
        } else {
            elements[i].style.display = "none";
        }
    }
}
