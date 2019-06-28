import React, {Component} from "react"

class SingleApp extends Component{
    render(){
        return(
<div><span className="icon"><i className={this.props.name}></i></span><span>{this.props.text}</span></div>
        )
}
}

class DuckApp extends Component {
    render() {
        return (
            <section className="app">
                <div className="container">
                    <h2>DuckApp</h2>
                    <div>
                        <SingleApp name="fas fa-calculator" text='Calculator'/>
                        <SingleApp name="fas fa-list" text='ToDoList'/>
                        <SingleApp name="fas fa-image" text='project'/>
                        <SingleApp name="fas fa-image" text='project'/>
                        <SingleApp name="fab fa-react" text='React App'/>

                    </div>
                </div>
            </section>
        )
    }
}

export default DuckApp;