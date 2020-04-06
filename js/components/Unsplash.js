import React, {Component}  from "react"
import axios from "axios"

class Unsplash extends Component {
    state={images:[]};
    onSearchSubmit= (term)=>{
    axios.get(" https://api.unsplash.com/search/photos", {
            params:{
                query: term
            },
            headers: {
                Authorization: "Client-ID 55f29c5b87454a3ebad4bb84e52136a8d41c0c8270fbdc5d0613e227e13575d4"
            }

        }).then(response=>{this.setState({images:response.data.results})})

    }

    render() {
        return (<div className="formUp" style={{marginTop: "10px"}}><SearchBar onSubmit={this.onSearchSubmit}/><ImageList images={this.state.images}/>
        </div>)
    }
}
class SearchBar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            term: "",
        }
    }
    onInputChange=(event)=>{
        this.setState({term:event.target.value.toUpperCase()})
    };
    onFormSubmit=(event)=>{
        event.preventDefault()
        this.props.onSubmit(this.state.term)
    }


    render() {
        return (
            <div>
                <div className="ui segment">
                    <form className="ui form" onSubmit={this.onFormSubmit}>
                        <div className="field">
                            <label>Image Search
                                <input type="text" value={this.state.term}  onChange={this.onInputChange}/>
                            </label>
                        </div>
                    </form>
                </div>
            </div>)
    }
}

const ImageList = (props)=>{
    const images= props.images.map((image)=>{
        return <img src={image.urls.regular} alt={image.alt_description} key={image.id} />
    });
    return <div>{images}</div>

};


export default Unsplash;
