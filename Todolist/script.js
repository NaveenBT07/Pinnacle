function addtodo(){
    //get the input
    var todoinput= document.getElementById("todo-input");
    //remove whitespace
    var todotext=todoinput.value.trim();
// create list item
    if(todotext !==""){
       var li= document.createElement("li");
// set text content to input value   
       li.textContent=todotext;
       //create delete button
       var deleteButton=document.createElement("button");
       deleteButton.textContent="Delete";
       //adds css class called "delete-btn"
       deleteButton.classList.add("delete-btn");
       deleteButton.onclick=function()
       {
        li.remove();
       };
       // button will be part of the list item and appear nxt to the item text
       li.appendChild(deleteButton);
       document.getElementById("todo-list").appendChild(li);
       //to clear the input field
       todoinput.value="";
    }
}
