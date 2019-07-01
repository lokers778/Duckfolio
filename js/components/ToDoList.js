import React, {Component} from "react";


class ToDoFormComponent extends Component {
    state = {
        text: "",
        id: 1,
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    };

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.onSubmit({
            text: this.state.text,
            complete: false,
            id: this.state.id
        })
        this.setState({
            id: this.state.id + 1,
            text: "",
        })
    }

    render() {
        return <>
            <h2>To Do List</h2>
            <form onSubmit={this.handleSubmit}>
                <input name="text" placeholder="add task" value={this.state.text} onChange={this.handleChange}/>
                <button type="submit" onClick={this.handleSubmit}></button>
            </form>
        </>
    }
}


class NewToDo extends Component {

    render() {

        return (
            <>
                <div style={{textDecoration: this.props.complete ? "line-through" : ""}}
                     onClick={this.props.toogleComplete}>{this.props.text}{console.log(this)}</div>
                <button onClick={this.props.deleteTask}>x</button>
            </>
        )

    }
}

class ToDoListComponent extends Component {
    state = {
        toDoList: [],
        todoToShow: "all",
    };



    newToDo = (task) => {
        this.setState({
            toDoList: [task, ...this.state.toDoList]
        })
    };

    toggleComplete = (id) => {
        this.setState({
            toDoList: this.state.toDoList.map(task => {
                if (task.id === id) {
                    return {
                        id: task.id,
                        text: task.text,
                        complete: !task.complete,

                    }
                } else {
                    return task
                }

            })
        })
    }

    updateTodoToShow = state => {
        this.setState({
            todoToShow: state
        });
    };

    handleDeleteTask = id => {
        this.setState({
            toDoList: this.state.toDoList.filter(task => task.id !== id)
        });
    };
    render() {
        let toDoList = [];

        if (this.state.todoToShow === "all") {
            toDoList = this.state.toDoList;
        } else if (this.state.todoToShow === "active") {
            toDoList = this.state.toDoList.filter(task => !task.complete
            );
        } else if (this.state.todoToShow === "complete") {
            toDoList = this.state.toDoList.filter(task => task.complete);
        }

        return (
            <div>
                <ToDoFormComponent onSubmit={this.newToDo}/>
                {toDoList.map((task) => (
                    <NewToDo key={task.id} toogleComplete={() => this.toggleComplete(task.id)}
                             deleteTask={() => this.handleDeleteTask(task.id)} id={task.id}
                             text={task.text} complete={task.complete}/>))}
                <div>Task left:{this.state.toDoList.filter((task) => !task.complete).length}</div>
                <div>
                    <button onClick={() => this.updateTodoToShow("all")}>All</button>
                    <button onClick={() => this.updateTodoToShow("active")}>Active</button>
                    <button onClick={() => this.updateTodoToShow("complete")}>Done</button>
                </div>
            </div>
        )


    }
}


export default ToDoListComponent;