import React, {Component} from "react"

class Icon extends Component{
    render() {

        return(
                 <a target="_blank" href={this.props.link}>
                <i className={this.props.name}></i></a>
        )
    }
}


class Logo extends Component {
    render() {
        return (
            <span>
                <Icon link="https://www.linkedin.com/in/łukasz-podeszwa-2587b9189" name="fab fa-linkedin"/>
                <Icon link="https://github.com/lokers778" name="fab fa-github"/>
                <Icon link="https://www.facebook.com/profile.php?id=100002591253604" name="fab fa-facebook"/>
        </span>


        )
    }
}

class Footer extends Component {
    render() {

        return (
            <footer>
                <div className="container">
                    < h3> Copyright & copy 2019 Lukasz Podeszwa.</h3>
                    <Logo/>
                </div>
            </footer>)
    }
}

export default Footer;

