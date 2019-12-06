import React from "react";
import Todo from "./Todo"

 //here i will be mapping data coming from data.js through App.js to then pass it to Todo.js
 //to start rendering data
const TodoList = props =>{
        return (
        <div className="Todo-list">         
{props.todo.map(item => {
//notice how im passing the id here since id has to be passed when passing data through props
    return <Todo todo={item} key={item.id} toggleTodo={props.toggleTodo}/>
})}
        </div>
    );
};
export default TodoList;