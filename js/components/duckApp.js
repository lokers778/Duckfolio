import React from "react"

function DuckApp() {
    return (
        <section className="app">
        <div className="container">
            <h2>DuckApp</h2>
            <div>
                <div><span className="icon"><i className="fas fa-calculator"></i></span><span>Calculator</span></div>
                <div><span className="icon"><i className="fas fa-list"></i></span><span>Todo list</span></div>
                <div><span className="icon"><i className="fas fa-image"></i></span><span>project</span></div>
            <div><span className="icon"><i className="fas fa-image"></i></span><span>project</span></div>
            <div><span className="icon"><i className="fab fa-react"></i></span><span>React App</span></div>
        </div>
        </div>
        </section>
    )
}

export default DuckApp;