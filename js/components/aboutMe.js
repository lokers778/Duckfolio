import React, {Component} from "react"

class AboutMeComponent extends Component {

    render() {
        return (
            <div id="AboutMe" className="description" style={{display:this.props.block}}>
                <div className="horizontalTabsButton" >
                    <button>My persona</button>
                    <button>Education</button>
                    <button>Experience</button>
                    <button>Plans</button>
                    <button>Hobby</button>
                </div>
                <div className="AboutMeDescriptions">
                    <div className="MyPersona">
                        1
                    </div>
                    <div className="Education">
                        2
                    </div>
                    <div className="Experience">
                        3
                    </div>
                    <div className="Plans">
                        4
                    </div>
                    <div className="Hobby">
                        5
                    </div>

                </div>
            </div>
        )
    }
}

class MySkillsComponent extends Component {

    render() {
        return (
            <div id="MySkills" className="description" style={{display:this.props.block}}>
                <div className="horizontalTabsButton" >
                    <button>HTML/CSS</button>
                    <button>JS/JQuery</button>
                    <button>React</button>
                    <button>Tech</button>
                    <button>General</button>
                </div>
                <div className="MySkillDescriptions">
                    <div className="htmlCSS">
                        11
                    </div>

                    <div className="jsJquery">
                        22
                    </div>
                    <div className="React">
                        33
                    </div>
                    <div className="Tech">
                        44
                    </div>
                    <div className="General">
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
            <div id="My story" className="description" style={{display:this.props.block}}>
                <h2>Why Ducks</h2>
                <p>Because i love them</p>
            </div>
        )
    }
}

class ButtonTabs extends Component {
    wasClicked1=()=>{
        this.props.changeDescription1();

    };
    wasClicked2=()=>{
        this.props.changeDescription2();

    } ;
    wasClicked3=()=>{
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
    state={
        display1:"none",
        display2:"none",
        display3:"none",
    }
    changeDescription1=()=>{
      this.setState({
          display1 :"block",
          display2:"none",
          display3:"none",
      })
    }
    changeDescription2=()=>{
        this.setState({
            display1 :"none",
            display2:"block",
            display3:"none",
        })
    }
    changeDescription3=()=>{
        this.setState({
            display1 :"none",
            display2:"none",
            display3:"block",
        })
    }
    render() {
        return (
            <section className="aboutMeSection">
                <div className="container">
                    <div className="myDescription">
                        <ButtonTabs changeDescription1={this.changeDescription1} changeDescription2={this.changeDescription2} changeDescription3={this.changeDescription3}/>

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