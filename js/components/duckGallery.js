import React, {Component} from "react"
import imageData from "../data/galeryimg_data.js";

class Hours extends Component {
    render() {


        const date = new Date();
        const time = date.getHours();
        let currentTime;

        if (time < 12) {
            currentTime = "Good morning"
        } else if (time >= 12 && time < 17) {
            currentTime = "Good afternoon"
        } else {
            currentTime = "Good night"
        }
        return (<h2>{currentTime}</h2>)
    }
}


class ImgComponents extends Component {
    render() {
        return (

            <figure>

                <img src={this.props.imgAtr.imgUrl} alt={this.props.imgAtr.altText}/>
                <figcaption><Hours/>Welcome to my site !!</figcaption>

            </figure>
        )
    }
}
const imgComponentsarray=imageData.map((img)=><ImgComponents key={img.id} imgAtr={img}/>);





class DuckGallery extends Component {
    state = {
        index: 0
    }
    componentDidMount() {
        this.intervalId = setInterval(() => {


        if(this.state.index >=4) {
            this.setState({ index :0});
        }
        else{
            this.setState({
                index: this.state.index + 1
            });
        }
        }, 6000);
    }

    componentWillUnmount(){
        clearInterval(this.intervalId);
    }
    render() {
        const Nr=this.state.index;
        console.log(Nr);
        console.log(imgComponentsarray[Nr-1])
        return (
            <section className="gallery">
                <div className="container">
                    {imgComponentsarray[Nr]}
                </div>
            </section>
        )
    }
}

export default DuckGallery;