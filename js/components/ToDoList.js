import React, {Component} from "react";
import toDoData from "../data/ToDoList_data";




class ToDoFormComponent extends Component{
    state = {
        text :"",
        id:1,
    }

    handleChange=(event)=>{
        this.setState({
            [event.target.name]:event.target.value
        })
    };

    handleSubmit = (event)=>{
        event.preventDefault();
        this.props.onSubmit({
            text:this.state.text,
            complete:false,
            id:this.state.id
        })
        this.setState({
            id:this.state.id +1,
            text: "",
        })
    }

    render() {
        return<>
            <h2>To Do List</h2>
            <form onSubmit={this.handleSubmit}>
                <input name="text" placeholder="add task" value={this.state.text} onChange={this.handleChange}/>
                <button type="submit" onClick={this.handleSubmit}></button>
            </form>
        </>
    }
}


class NewToDo extends Component{
    render() {
        return(
            <div>{this.props.text}</div>
        )

    }
}

class ToDoListComponent extends Component {
    state = {
        toDoList:[],
    };

    newToDo=(task)=>{
        this.setState({
            toDoList: [task, ...this.state.toDoList]
        })
    };

    render() {
        return (
            <div>
              <ToDoFormComponent onSubmit={this.newToDo}/>
              {this.state.toDoList.map((task)=>(<NewToDo key={task.id} text={task.text}/>))}
            </div>
        )


    }
}


export default ToDoListComponent;