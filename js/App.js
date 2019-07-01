import React, {Component} from 'react';
import ReactDOM from "react-dom";
import Header from "./components/Header.js"
import DuckGallery from "./components/duckGallery.js"
import DuckApp from "./components/duckApp.js"
import AboutMe from "./components/aboutMe.js"
import Footer from "./components/Footer.js"
import CalculatorApp from "./components/Calculator";
import ToDoListComponent from "./components/ToDoList";
import {
    HashRouter,
    Route,
    Link,
    Switch,
    NavLink,
} from 'react-router-dom';
class Main extends Component{
    render() {
        return (
            <>
                <DuckGallery/>
                <DuckApp/>
                <AboutMe/>

            </>
        )
    }
}
class OtherProjects extends Component{
    render() {
        return (
            <>
                <h2>Inne projekty</h2>

            </>
        )
    }
}
class Contact extends Component{
    render() {
        return (
            <>
                <h1>kontakt</h1>

            </>
        )
    }
}
class NotFound extends Component {
    render() {
        return <h1>404,Nothing is here</h1>;
    }
}
function App() {
    return (
        <>
            <Header/>
            <HashRouter>
                <Switch>
                    <Route exact path='/' component={Main} />
                    <Route path='/contact' component={Contact} />
                    <Route path='/projects' component={OtherProjects} />
                    <Route component={NotFound} />
                </Switch>
            </HashRouter>
            <Footer/>
            <CalculatorApp/>
            <ToDoListComponent/>
        </>
    )

}

ReactDOM.render(<App/>,
    document.getElementById("root")
);
