import React, {Component} from "react"

class SingleApp extends Component{
    ClickshowApp=()=>{
       this.props.show()
    }

    render(){
        return(
<div onClick={this.ClickshowApp}><span className="icon"><i className={this.props.name}></i></span><span>{this.props.text}</span></div>
        )
}
}

class DuckApp extends Component {
    state={
        display:"none"
    };

    showApp=()=>{
        this.setState({
            display:"block"
        })
        console.log("hello")
    }
    closeApp=()=>{
        this.setState({
            display:"none"
        })
        console.log("hello")
    }
    render() {
        return (
            <section className="app">
                <div className="container">
                    <h2>DuckApp</h2>
                    <div>
                        <SingleApp name="fas fa-calculator" text='Calculator' show={this.showApp}/>
                        <SingleApp name="fas fa-list" text='ToDoList' show={this.showApp}/>
                        <SingleApp name="fas fa-image" text='project' show={this.showApp}/>
                        <SingleApp name="fas fa-image" text='project' show={this.showApp}/>
                        <SingleApp name="fab fa-react" text='React App' show={this.showApp}/>

                    </div>
                    <section class="AppDisplay" style={{display:this.state.display}}><button onClick={this.closeApp}><i class="fas fa-times"></i></button></section>
                </div>
            </section>
        )
    }
}

export default DuckApp;