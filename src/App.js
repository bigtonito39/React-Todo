import React from 'react';
import TodoForm from "./components/TodoComponents/TodoForm"
//notice how since im not importing from default i have to import toDo variable with {}
import {toDo} from "./data"
import TodoList from "./components/TodoComponents/TodoList"


class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor(){
    super();
    this.state= {
      todo:toDo
    }
  }

  //Here im creating a funtion that will Create a card based on the imput received from TodoList 
  //and will set the main state here in the App.js
  addTodoList = userImput => {
    const newItem = {
      name:userImput,
      studied:false,
      id:Date.now()
    }
    //this is placing our new card created on top by variable (newitem) as a object of array in our state;
    //notice how im setting the state is inside the addTodoList function as well;
    this.setState({
      todo:[...this.state.todo, newItem]
    })
  }
  //in this function we are receiving an argument coming from todo.js which is pretty much the
  //id of the item that was click

  toggleTodo = todoId => {
  this.setState({
    todo: this.state.todo.map(item => {
      if (todoId === item.id) {
        return {
          ...item,
          studied: !item.studied
        };
      }
      else {
        return item
      }
    })

  })
  

  }
 
  removeTodo(name){
    this.setState({
        todo: this.state.todo.filter(el => el !== name)
    })
}


  render() {
   console.log(this.state.todo)
    return (
      <div>
        <div>
        <h2>Welcome to your Todo App!</h2>
        {/* Here im passing as props the function addTodoList to TodoForm Component */ }
        <TodoForm addTodoList={this.addTodoList} />
        </div>
        {/*here im passing the data coming from state on App.js to TodoList in order to map it once there*/}
      <TodoList todo={this.state.todo} toggleTodo={this.toggleTodo} removeTodo={this.removeTodo} />
      </div>
    );
  }
}

export default App;
