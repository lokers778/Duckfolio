import React from "react"

function AboutMe() {
    return (
        <section className="aboutMeSection">
        <div className="container">
            <div className="myDescription">
            <div className="buttonTabs">
                <button>About Me</button>
                <button>My skils</button>
                <button>Why duck</button>
            </div>
            <div id="AboutMe" className="description"></div>
            <div id="My skils" className="description"></div>
            <div id="My story" className="description"></div>
            </div>
        </div>
        </section>
    )
}

export default AboutMe