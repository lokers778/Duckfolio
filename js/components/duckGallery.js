import React from "react"
import imageData from "../data/galeryimg_data.js";

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

const imgComponentsarray=imageData.map((img)=><ImgComponents key={img.id} imgAtr={img}/>);
function ImgComponents(props) {

    return(
        <figure>

            <img src={props.imgAtr.imgUrl} alt={props.imgAtr.altText}/>
            <figcaption><Hours/>Welcome to my site !!</figcaption>

        </figure>
    )
}






function DuckGallery() {
    return (
        <section className="gallery">
        <div className="container">
            {imgComponentsarray}
            </div>
        </section>
    )
}

export default DuckGallery;