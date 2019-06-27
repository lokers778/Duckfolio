import React from "react"

function AboutMeComponent() {
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

function MySkillsComponent() {
    return (
        <div id="MySkills" className="description">
            <div className="horizontalTabsButton">
                <button>HTML</button>
                <button>CSS</button>
                <button>JS</button>
                <button>JQuery</button>
                <button>React</button>
                <button>Tech</button>
                <button>General</button>
            </div>
            <div className="MySkillDescriptions"></div>
        </div>
    )
}

function WhyDuckComponent() {
    return (
        <div id="My story" className="description"></div>
    )
}

function ButtonTabs() {
    return(
        <div className="buttonTabs">
            <button>About Me</button>
            <button>My Skills</button>
            <button>Why Duck</button>
        </div>
    )
}

function AboutMe() {
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

export default AboutMe