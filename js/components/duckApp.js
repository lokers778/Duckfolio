import React, { Component } from "react"
import ToDoListComponent from "./ToDoList";
import FetchComponent from "./Fetch"
import DuckChat from "./DuckChat"
import DuckChatNew from "./DuckChatNew"
import Unsplash from "./Unsplash";

class SingleApp extends Component {
    ClickshowApp = () => {
        let content = this.props.content
        this.props.show(content)
    }
    render() {

        return (
            <div onClick={this.ClickshowApp}><span className="icon"><i className={this.props.name}></i></span><span>{this.props.text}</span></div>
        )
    }
}

class DuckApp extends Component {
    state = {
        display: "none",
        content: ""
    };

    showApp = (e) => {
        this.setState({
            display: "block",
            content: e
        })
    }
    closeApp = () => {
        this.setState({
            display: "none",
            content: ""
        })
    }
    render() {
        return (
            <section className="app">
                <div className="container">
                    <h2>DuckApp</h2>
                    <div>
                        <SingleApp name="fas fa-question" text='Unsplash Gallery' show={this.showApp.bind(this)} content={<Unsplash />} />
                        <SingleApp name="fas fa-list" text='ToDoList' show={this.showApp} content={<ToDoListComponent />} />
                        <SingleApp name="fas fa-image" text='Meme Generator' show={this.showApp} content={<FetchComponent />} />
                        <SingleApp name="far fa-comment-dots" text="DuckChat" show={this.showApp} content={<DuckChat />} />
                        <SingleApp name="fab fa-react" text='React App' />
                    </div>
                    <section className="AppDisplay" style={{ display: this.state.display }}><div className="AppContainer">{this.state.content}</div><button className="closeApp" onClick={this.closeApp}><i className="fas fa-times"></i></button></section>
                </div>
            </section>
        )
    }
}


export default DuckApp;