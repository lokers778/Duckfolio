import React, {Component} from "react";


class Icon extends Component{


    render() {

        return(
            <a target="_blank" href={this.props.link}>
                <i className={this.props.name}></i></a>
        )
    }
}

class Form extends Component{
    state = {
        name: "",
        email:"",
        text:"",
        textarea:"",
    }
    handleNameChange = (e) => {
        this.setState({name: e.target.value});
    };
    handleEmailChange = (e) => {
        this.setState({email: e.target.value});
    };
    handleTextChange = (e) => {
        this.setState({text: e.target.value});
    };
    handleTextAreaChange = (e) => {
        this.setState({textarea: e.target.value});
    };
    render() {
        return(
            <form action = "mailto:lukasz.podeszwa.dev@gmail.com" method = "post" encType = "text/plain" >
                <input type="text" placeholder="Name" name="name" value={this.state.name} onChange={this.handleNameChange}/>
                <input type="email" placeholder="E-mail" name="emailaddress" value={this.state.email} onChange={this.handleEmailChange}/>
                <input type="text" placeholder="Subject" name="subject" value={this.state.text} onChange={this.handleTextChange}/>
                <textarea  type="text" placeholder="Message" name="subject" value={this.state.textarea} onChange={this.handleTextAreaChange}/>
                <button type="submit">Submit</button>
            </form>

        )
    }
}



class Contact extends Component{
    render() {
        return (

                <section className="form">
                    <div className="container">
              <Form/>
                        <div>
                            <h2>Łukasz Podeszwa</h2>
                            <ul>
                                <li>Phone : 48 884 306 104</li>
                                <li>Email:  lukasz.podeszwa.dev@gmail.com <Icon link="mailto:lukasz.podeszwa.dev@gmail.com" name="fas fa-envelope"/></li>
                                <li> Linkedin : www.linkedin.com/in/łukasz-podeszwa123 <Icon link="https://www.linkedin.com/in/łukasz-podeszwa-2587b9189" name="fab fa-linkedin"/></li>
                                <li>Github : https://github.com/lokers778 <Icon link="https://github.com/lokers778" name="fab fa-github"/></li>
                            </ul>
                        </div>
                    </div>
                </section>

        )
    }
}

export default Contact



