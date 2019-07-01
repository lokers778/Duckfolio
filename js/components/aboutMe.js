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
                        1
                    </div>
                    <div className="Education" style={{display: this.state.display2}}>
                        2
                    </div>
                    <div className="Experience" style={{display: this.state.display3}}>
                        3
                    </div>
                    <div className="Plans" style={{display: this.state.display4}}>
                        4
                    </div>
                    <div className="Hobby" style={{display: this.state.display5}}>
                        5
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
                        11
                    </div>

                    <div className="jsJquery" style={{display: this.state.display2}}>
                        22
                    </div>
                    <div className="React" style={{display: this.state.display3}}>
                        33
                    </div>
                    <div className="Tech" style={{display: this.state.display4}}>
                        44
                    </div>
                    <div className="General" style={{display: this.state.display5}}>
                        55
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
                    <h2>Why Ducks</h2>
                    <p>Because i love them</p>
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