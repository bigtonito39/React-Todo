import React from "react";

//on this functional component ill be passing as props from Todolist to start rendering data coming 
//from data.js through TodoList.js
const Todo = props => {
    
    
    //function to send id of the item clicked to our toggleTodo function on App.js
    //(check toggleTodo function to see what it does with this ID)
   const clickHandler = e => {
    props.toggleTodo(props.todo.id)
   }

  
     return (
        <div
        //this part here is to change the styling on a click
        //when (props.todo.studied) is false .item styling will happen and 
        //when  (props.todo.studied) is true .item.studied styling will happen 
        className={`item   ${props.todo.studied ? " studied" : ""}`}
        onClick={clickHandler}        
        >

   {props.todo.name}
        </div>
        
    );
};
export default Todo;