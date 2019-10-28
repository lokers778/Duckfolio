import React, {Component}  from "react"

class App extends Component {
    state={images:[]};
    onSearchSubmit= async(term)=>{
        const response = await  axios.get(" https://api.unsplash.com/search/photos", {
            params:{
                query: term
            },
            headers: {
                Authorization: "Client-ID 55f29c5b87454a3ebad4bb84e52136a8d41c0c8270fbdc5d0613e227e13575d4"
            }

        });
        this.setState({images:response.data.results})
    }

    render() {
        return <div className="ui container" style={{marginTop: "10px"}}><SearchBar onSubmit={this.onSearchSubmit}/>Found:{this.state.images.length}
        </div>
    }
}

