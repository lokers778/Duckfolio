import React, {Component} from "react";
import projectData from "../data/ToDoList_data";



class SingleProject extends Component{
    render() {
        return(
            <div>
                <a target="_blank" href={this.props.projectAtr.link}><img src={this.props.projectAtr.imgUrl} alt={this.props.projectAtr.altText}/></a>
                <div><h3>{this.props.projectAtr.title}</h3><p>{this.props.projectAtr.text}</p> <span>"{this.props.projectAtr.quote}"</span></div>
            </div>
        )
    }
}

const projectArray=projectData.map((project)=><SingleProject key={project.id} projectAtr={project}/>);
class OtherProjects extends Component {
    render() {
        return (
            <>
                <section className="otherProjects">
                    <div className="container">
                        {projectArray}
                    </div>
                </section>

            </>
        )
    }
}

export default OtherProjects