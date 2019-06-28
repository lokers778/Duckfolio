import  React,{Component} from "react";
import toDoData from "../data/ToDoList_data";

class ToDoItem extends Component{
    render() {
        return(
            <div className="todo-item">
                <input type="checkbox" checked={this.props.task.completed}/>
                <p>{this.props.task.text}</p>
                <button>remove</button>
            </div>
        )
    }
}


class ToDoListComponent extends Component{

    render() {
        const toDoArray=toDoData.map((task)=><ToDoItem key={task.id} task={task}/>)
        return(
            <div>
            {toDoArray}
            </div>
        )


    }
}

export default ToDoListComponent;