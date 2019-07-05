import React, {Component} from "react"





class FetchComponent extends Component{
    constructor() {
        super()
        this.state = {
            top: "",
            bottom: "",
            memes: [],
            img:"img/Duck.jpeg"
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this)
    }
componentDidMount() {


    fetch("https://api.imgflip.com/get_memes")
        .then((response) =>response.json())
        .then(response=>{
            const {memes}=response.data
            this.setState({memes:memes})
        })

}

handleSubmit(event){
        event.preventDefault()
    const randomNum=Math.floor(Math.random()*this.state.memes.length);
    const randomMemeImg = this.state.memes[randomNum].url;
    this.setState({ img: randomMemeImg })
}

    handleChange(event){
const{name,value}=event.target;
        this.setState({[name]:value})
    }
    render(){
        return<div class="generator">
            <form className="formMemGenerator" onSubmit={this.handleSubmit}>
                <input name="top" type="text" placeholder="Upper Text" value={this.state.top} onChange={this.handleChange}/>
                <button>Generate</button>
                <input name="bottom" placeholder="Bottom Text" value={this.state.bottom} onChange={this.handleChange}/>

            </form>
            <div className="meme">
                <img src={this.state.img} alt="generate Mem"/>
                <h2 className="top">{this.state.top}</h2>
                <h2 className="bottom">{this.state.bottom}</h2>
            </div>
        </div>
    }
}








export default FetchComponent