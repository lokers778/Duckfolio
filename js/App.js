import React from "react";
import ReactDOM from "react-dom";
import Header from "./components/Header.js"
import DuckGallery from "./components/duckGallery.js"
import DuckApp from "./components/duckApp.js"
import AboutMe from "./components/aboutMe.js"
import Footer from "./components/Footer.js"

function App() {
    return (
        <>
        <Header/>
        <DuckGallery/>
            <DuckApp/>
            <AboutMe/>
        <Footer/>
</>


        )

}

ReactDOM.render(<App/>,
document.getElementById("root")
);
