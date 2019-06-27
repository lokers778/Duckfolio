import React, {Component} from "react"

class AboutMeComponent extends Component {
    render() {
        return (
            <div id="AboutMe" className="description">
                <div className="horizontalTabsButton">
                    <button>My persona</button>
                    <button>Education</button>
                    <button>Experience</button>
                    <button>Plans</button>
                    <button>Hobby</button>
                </div>
                <div className="AboutMeDescriptions"></div>
            </div>
        )
    }
}

class MySkillsComponent extends Component {
    render() {
        return (
            <div id="MySkills" className="description">
                <div className="horizontalTabsButton">
                    <button>HTML/CSS</button>
                    <button>JS/JQuery</button>
                    <button>React</button>
                    <button>Tech</button>
                    <button>General</button>
                </div>
                <div className="MySkillDescriptions">
                    <div className="htmlCSS">
                        <p></p>
                    </div>

                    <div className="jsJquery">

                    </div>
                    <div className="React">

                    </div>
                    <div className="Tech">

                    </div>
                    <div className="General">

                    </div>
                </div>
            </div>
        )
    }
}

class WhyDuckComponent extends Component {
    render() {
        return (
            <div id="My story" className="description"></div>
        )
    }
}

class ButtonTabs extends Component {
    render() {
        return (
            <div className="buttonTabs">
                <button>About Me</button>
                <button>My Skills</button>
                <button>Why Duck</button>
            </div>
        )
    }
}

class AboutMe extends Component {
    render() {
        return (
            <section className="aboutMeSection">
                <div className="container">
                    <div className="myDescription">
                        <ButtonTabs/>
                        <AboutMeComponent/>
                        <MySkillsComponent/>
                        <WhyDuckComponent/>
                    </div>
                </div>
            </section>
        )
    }
}

export default AboutMe