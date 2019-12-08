import React from "react";

class TodoForm extends React.Component {
    constructor(props){
        console.log(props)
    super(props);
        //Creating a state that will take the users imput from the form
        this.state = {

            userImput: "",
        }
    };

    //Creating a change handler function to set whatever the user types as the current state for userImput
    //notice how i dont have to use const here since this this function is being created inside the a class component.
    changeHandler = event => {
        this.setState({userImput: event.target.value});
    }

    submitHandler = event => {
        event.preventDefault();
        //this will setup the state on app to whatever the state on the todoForm is
        this.props.addTodoList(this.state.userImput)
        //this will reset the form when the data gets submitted
        this.setState({userImput:""})
    }
  
   
    render(){
        return(
            
            <div className="Search-Field-Zone">
              <form onSubmit={this.submitHandler}>
                  
                <input 
                type="text"
                name="userImput"
                value={this.state.userImput}
                //notice here how i have to use this to reference to the function on top since this is a class component.
                onChange={this.changeHandler}
                 />
                 <button className="buttons" type="submit">Add Subject</button>
                 
            </form>
            <form onSubmit={this.props.removeTodo}>
            <button  stype ="submit" className="buttons">Clear Done Subjects</button>
            </form>
            
            </div>
          
        )
    }
}
export default TodoForm;
