import React from "react"




function Logo() {
    return(
        <span>
            <a target="_blank" href="https://www.linkedin.com/in/łukasz-podeszwa-2587b9189">
                <i className="fab fa-linkedin"></i></a>
            <a target="_blank" href="https://github.com/lokers778">
                <i className="fab fa-github"></i></a>
            <a href="https://www.facebook.com/profile.php?id=100002591253604" target="_blank"><i className="fab fa-facebook"></i></a>
        </span>


    )
}



function Footer() {
    return (
        <footer>
        <div className = "container" >
        < h3 > Copyright & copy 2019 Lukasz Podeszwa.</h3>
        <Logo/>
    </div>
        </footer>)
}

export default Footer