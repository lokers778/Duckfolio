import React from "react"

function Hours() {
    const date = new Date();
    const time=date.getHours();
    let currentTime

    if (time < 12) {
        currentTime = "Good morning"
    } else if (time >= 12 && time < 17) {
        currentTime= "Good afternoon"
    } else {
        currentTime = "Good night"
    }
    return( <h2>{currentTime}</h2>)
}

function ImgComponents(props) {
    return(
        <figure>
            <img src={props.imgLink}/>
            <figcaption><Hours/>Welcome to my site !!</figcaption>
        </figure>
    )
}

function DuckGallery() {
    return (
        <section className="gallery">
        <div className="container">
        <h2>this is gallery </h2>
            <ImgComponents imgLink="img/DUCK-1.jpg"/>
            <ImgComponents imgLink="img/DUCK-2.jpg"/>
            <ImgComponents imgLink="img/DUCK-3.jpg"/>
            <ImgComponents imgLink="img/DUCK-4.jpg"/>
            <ImgComponents imgLink="img/DUCK-5.jpg"/>
            </div>
        </section>
    )
}

export default DuckGallery;