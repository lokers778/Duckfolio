import React, {Component} from "react"

class AboutMeComponent extends Component {
    state = {
        display1: "block",
        display2: "none",
        display3: "none",
        display4: "none",
        display5: "none",
    }
    handeClick1 = () => {
        this.setState({
            display1: "block",
            display2: "none",
            display3: "none",
            display4: "none",
            display5: "none",
        })
    }
    handeClick2 = () => {
        this.setState({
            display1: "none",
            display2: "block",
            display3: "none",
            display4: "none",
            display5: "none",
        })
    }
    handeClick3 = () => {
        this.setState({
            display1: "none",
            display2: "none",
            display3: "block",
            display4: "none",
            display5: "none",
        })
    }
    handeClick4 = () => {
        this.setState({
            display1: "none",
            display2: "none",
            display3: "none",
            display4: "block",
            display5: "none",
        })
    }
    handeClick5 = () => {
        this.setState({
            display1: "none",
            display2: "none",
            display3: "none",
            display4: "none",
            display5: "block",
        })
    }

    render() {
        return (
            <div id="AboutMe" className="description" style={{display: this.props.block}}>
                <div className="horizontalTabsButton">
                    <button onClick={this.handeClick1}>My persona</button>
                    <button onClick={this.handeClick2}>Education</button>
                    <button onClick={this.handeClick3}>Experience</button>
                    <button onClick={this.handeClick4}>Plans</button>
                    <button onClick={this.handeClick5}>Hobby</button>
                </div>
                <div className="AboutMeDescriptions">
                    <div className="MyPersona" style={{display: this.state.display1}}>
                        <p> I started learning programing in summer,2018. I'd was playing with unity and unreal with blueprints then i realize that i dont understand what i doing just watching courses and expecting this will work. I started learning from html, css and i loved it (latter come JS and almost kill that love but this is another story). Coding website, creating layout made me feel from the first time for a long time that this is what i want to do in my future , i am able to give my time and sleep for this. So for a long time i was going to college and learning on almost every evening. When i decide this is not enough and sometimes its harder than it should because i dont have time i started thinking about bootcamp.. and there i am</p>
                    </div>
                    <div className="Education" style={{display: this.state.display2}}>
                       <ul>
                           <li>In 2019 I successfully finished Coders Lab IT SCHOOL</li>
                           <li>In 2014 I finished High School</li>
                           <li>Since 2015 I study Biotechnology on Poznań University
                               of Life Sciences. Only defence my Engineer's Thesis left </li>
                       </ul>
                    </div>
                    <div className="Experience" style={{display: this.state.display3}}>
                        <ul>
                        <li>23.03.2019-10.05.2019 Waiter in restaurant</li>
                        <li>20.09.2018-31.12.2018 Barman in restaurant</li>
                        </ul>
                    </div>
                    <div className="Plans" style={{display: this.state.display4}}>
                       <p>
                           This year i want to practice front-end technology, and get better with my  English-Speaking skills. I have hope to get more experience and increase my work speed.
                           In future i would love to know backed understanding communication between backend and frontend, and get EITCA computer graphics diploma
                       </p>
                    </div>
                    <div className="Hobby" style={{display: this.state.display5}}>
                        <p>From kid i'm fascinated with computer games, fantasy, animals.. when i got older i love them all even better but i added to this group some anime/ manga , travels, jogging and programing.</p>
                    </div>

                </div>
            </div>
        )
    }
}

class MySkillsComponent extends Component {
    state = {
        display1: "block",
        display2: "none",
        display3: "none",
        display4: "none",
        display5: "none",
    }
    handeClick1 = () => {
        this.setState({
            display1: "block",
            display2: "none",
            display3: "none",
            display4: "none",
            display5: "none",
        })
    }
    handeClick2 = () => {
        this.setState({
            display1: "none",
            display2: "block",
            display3: "none",
            display4: "none",
            display5: "none",
        })
    }
    handeClick3 = () => {
        this.setState({
            display1: "none",
            display2: "none",
            display3: "block",
            display4: "none",
            display5: "none",
        })
    }
    handeClick4 = () => {
        this.setState({
            display1: "none",
            display2: "none",
            display3: "none",
            display4: "block",
            display5: "none",
        })
    }
    handeClick5 = () => {
        this.setState({
            display1: "none",
            display2: "none",
            display3: "none",
            display4: "none",
            display5: "block",
        })
    }

    render() {
        return (
            <div id="MySkills" className="description" style={{display: this.props.block}}>
                <div className="horizontalTabsButton">
                    <button onClick={this.handeClick1}>HTML/CSS</button>
                    <button onClick={this.handeClick2}>JS/JQuery</button>
                    <button onClick={this.handeClick3}>React</button>
                    <button onClick={this.handeClick4}>Tech</button>
                    <button onClick={this.handeClick5}>General</button>
                </div>
                <div className="MySkillDescriptions">
                    <div className="htmlCSS" style={{display: this.state.display1}}>
                        <ul>
                            <li>
                                I know and understand new tags in HTML5
                            </li>
                            <li>
                                I understand how to create accessibility website.
                            </li>
                            <li>
                                I know how to format text, build table , form etc.
                            </li>
                            <li>
                                I am able to create website layout based on flexbox/ grid
                            </li>
                            <li>
                                I understand how Css selectors,properties and Values work
                            </li>
                            <li>
                                I can build full RWD website
                            </li>
                            <li>
                                I know how to use Sass
                            </li>
                            <li>
                                I have knowledge about Css basic animation
                            </li>
                        </ul>
                    </div>

                    <div className="jsJquery" style={{display: this.state.display2}}>
                        <ul>
                            <li>
                                I know basic Java Script operations, loops ,control flow.
                            </li>
                            <li>
                                I can work with different variables and use methods on them.
                            </li>
                            <li>
                                I know how to create function, object
                            </li>
                            <li>
                                I have knowledge about ES6( Arrow functions, new Array methods, export import, classes)
                            </li>
                            <li>
                                I understand DOM and can preform operations on it.
                            </li>
                            <li>
                                I have basic knowledge about jQuerry
                            </li>
                        </ul>
                    </div>
                    <div className="React" style={{display: this.state.display3}}>
                        <ul>
                            <li>
                                I am able to setting up an environment
                            </li>
                            <li>
                                I know JSX and understand how to use JS inside
                            </li>
                            <li>
                                I understand fetching data from Api in React
                            </li>
                            <li>
                                I am able to write modern react code with props, state, conditional rendering
                            </li>
                            <li>
                                i have knowledge about React Router v4
                            </li>
                            <li>
                                I am still learning and practicing this framework with
                            </li>
                        </ul>
                    </div>
                    <div className="Tech" style={{display: this.state.display4}}>
                        <ul>
                            <li>
                                I know Linux on basic level and windows
                            </li>
                            <li>
                                I have knowledge about node.js i can setup environment with webpack
                            </li>
                            <li>
                                I know how to install and use Gulp with sass
                            </li>
                            <li>
                                I understand how Scrum-agile method work
                            </li>
                            <li>
                                I can use simple Git command, create multiple branch and change to other
                            </li>
                        </ul>
                    </div>
                    <div className="General" style={{display: this.state.display5}}>
                        <p>I am still practicing and learning how to code, sometimes i make some mistakes but with documentation i can fix them. I have problem with setting up configuration projects, but eventually i will do it. My worst disadvantage probably is that i need more practice because some things take me more time that they should .I understand how fast this branch changing and I am fully committed to keep up with this if only i get the chance.</p>
                    </div>
                </div>
            </div>
        )
    }
}

class WhyDuckComponent extends Component {


    render() {
        return (
            <div id="DuckStory" className="description" style={{display: this.props.block}}>
                <div>
                    <p>From the first time i heard about <i>duck overflow</i> i fall in love with this. I needed more practice using React on basic level so when i thought about creating and learning new technology I thought I will use that single thing what made me thinking about programing in this exciting and funny category. So why ducks ? because  i love them !!! This project still need some fixes, some thing are hardcoded i will repair them soon.And this project is far from finish ony have one application from 5</p>
                </div>
            </div>
        )
    }
}

class ButtonTabs extends Component {
    wasClicked1 = () => {
        this.props.changeDescription1();

    };
    wasClicked2 = () => {
        this.props.changeDescription2();

    };
    wasClicked3 = () => {
        this.props.changeDescription3();

    }

    render() {
        return (
            <div className="buttonTabs">
                <button onClick={this.wasClicked1}>About Me</button>
                <button onClick={this.wasClicked2}>My Skills</button>
                <button onClick={this.wasClicked3}>Why Duck</button>
            </div>
        )

    }
}

class AboutMe extends Component {
    state = {
        display1: "none",
        display2: "none",
        display3: "none",
    }
    changeDescription1 = () => {
        this.setState({
            display1: "block",
            display2: "none",
            display3: "none",
        })
    }
    changeDescription2 = () => {
        this.setState({
            display1: "none",
            display2: "block",
            display3: "none",
        })
    }
    changeDescription3 = () => {
        this.setState({
            display1: "none",
            display2: "none",
            display3: "block",
        })
    }

    render() {
        return (
            <section className="aboutMeSection">
                <div className="container">
                    <div className="myDescription">
                        <ButtonTabs changeDescription1={this.changeDescription1}
                                    changeDescription2={this.changeDescription2}
                                    changeDescription3={this.changeDescription3}/>

                        <AboutMeComponent block={this.state.display1}/>
                        <MySkillsComponent block={this.state.display2}/>
                        <WhyDuckComponent block={this.state.display3}/>
                    </div>
                </div>
            </section>
        )
    }
}

export default AboutMe