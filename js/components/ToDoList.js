import React, {Component} from "react";
import toDoData from "../data/ToDoList_data";

class ToDoItem extends Component {
    render() {
        return (
            <div className="todo-item">
                <input type="checkbox" checked={this.props.task.completed} onChange={() => {
                    this.props.handleChange(this.props.task.id)
                }}/>
                <p>{this.props.task.text}</p>
                <button>remove</button>
            </div>
        )
    }
}


class ToDoListComponent extends Component {
    state = {
        input :"",
        doneTas: toDoData
    }

    handleChange=(event)=>{
        this.setState({
        [event.target.name]:event.target.value
        })
    }
        handleSubmit = (event)=>{
        event.preventDefault()
        }




    render() {
        const toDoArray = this.state.doneTas.map((task) => <ToDoItem key={task.id} task={task}
                                                                     handleChange={this.handleChange}/>)
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                <h2>To Do List</h2>
                {toDoArray}
                <input name="text" placeholder="add task" value={this.state.text} onChange={this.handleChange}/>
                <submit></submit>
                </form>
            </div>
        )


    }
}


export default ToDoListComponent;