import React, {Component} from 'react';
import ReactDOM from "react-dom";
import Header from "./components/Header.js"
import DuckGallery from "./components/duckGallery.js"
import DuckApp from "./components/duckApp.js"
import AboutMe from "./components/aboutMe.js"
import Footer from "./components/Footer.js"
import OtherProjects from "./components/OtherProjects";
import Contact from "./components/Form";
import {
    HashRouter,
    Route,
    Switch,
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
        </>
    )

}

ReactDOM.render(<App/>,
    document.getElementById("root")
);
