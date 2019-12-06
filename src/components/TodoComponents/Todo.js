import React from "react";

//on this functional component ill be passing as props from Todolist to start rendering data coming 
//from data.js through TodoList.js
const Todo = props => {
    
   const clickHandler = e => {
       console.log(e)
       props.toggleTodo(props.todo.id)
   }

     return (
        <div
        className={`item${props.todo.studied ? " studied" : ""}`}
        onClick={clickHandler}        
        >

   {props.todo.name}
        </div>
        
    );
};
export default Todo;