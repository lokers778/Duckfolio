import React, {Component} from "react";
import ReactDOM from 'react-dom';
import {
    HashRouter,
    Route,
    Link,
    Switch,
    NavLink,
}from 'react-router-dom';

class Duck extends Component {
    render() {
        return (
            <>
                <div className="duck">
                    <div className="duckBody">
                        <div className="leftWing"></div>
                        <div className="rightWing"></div>
                        <div className="duckHead">
                            <div className="rightEye"></div>
                            <div className="leftEye"></div>
                            <div className="upperBeak"></div>
                            <div className="bottomBeak"></div>

                        </div>

                    </div>

                </div>


            </>
        )
    }
}

class Logo extends Component {
    render() {

        return (
            <>
                <div className="logo">
                    <h1>DuckFolio</h1>
                </div>
            </>
        )
    }
}

class Nav extends Component {
    render() {
        return (
            <>
                <HashRouter>
                <nav>
                    <Link to="/"><div>Main</div></Link>
                    <Link to="/contact"> <div> Other project</div></Link>
                        <Link to="/projects"> <div>Contact</div></Link>
                </nav>
                </HashRouter>
            </>
        )
    }
}

class Header extends Component {
    render() {
        return (
            <header>
                <div className="container">
                    <Duck/>
                    <Logo/>
                    <Nav/>
                </div>
            </header>
        )
    }
}

export default Header