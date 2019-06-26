import React from "react"

function Duck() {
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

function Logo() {
    return (
        <>
            <div className="logo">
                <h1>DuckFolio</h1>
            </div>
        </>
    )
}
function Nav() {
    return (
        <>
           <nav>
           </nav>
        </>
    )
}





function Header() {
    return (
        <header>
        <div className="container">
            <Duck />
            <Logo/>
           <Nav/>
        </div>
        </header>
            )
}

export default Header