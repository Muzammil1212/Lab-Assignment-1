const classNames = {
    TODO_ITEM: "todo-container",
    TODO_CHECKBOX: "todo-checkbox",
    TODO_TEXT: "todo-text",
    TODO_DELETE: "todo-delete",
  };
 
  const list = document.getElementById("todo-list");
  const itemCountSpan = document.getElementById("item-count");
  const uncheckedCountSpan = document.getElementById("unchecked-count");
  const input_text=document.getElementById("newtasks");
  var count=0;
  function newTodo() {
    if(input_text.value==""){
      prompt("Please input text");
    }
    else{
      document.getElementById('todo-list').innerHTML+=`
      
      <div class="task">
        <span id="task-name">
          ${document.querySelector('#newtasks').value}
        </span>
        <button class="delete" onclick="individual_item()">Delete
          
        </button>
      </div>
      
      `;
      input_text.value='';
    }
    

    count+=1;
    itemCountSpan.innerHTML = count;
    uncheckedCountSpan.innerHTML = count;
    
    
  }
  
  function removeTodo() {
    list.innerHTML='';
count=0;
itemCountSpan.innerHTML =count;
uncheckedCountSpan.innerHTML =count;

}
function individual_item(){
count--;

  itemCountSpan.innerHTML =count;
  uncheckedCountSpan.innerHTML =count;
  list.removeChild(list.lastElementChild);
}
