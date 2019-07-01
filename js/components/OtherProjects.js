import React, {Component} from "react";
import projectData from "../data/ToDoList_data";



class SingleProject extends Component{
    render() {
        return(
            <div>
                <img src={this.props.projectAtr.imgUrl} alt={this.props.projectAtr.altText}/>
                <div><h3>{this.props.projectAtr.title}</h3><p>{this.props.projectAtr.text}</p></div>
            </div>
        )
    }
}

const projectArray=projectData.map((project)=><SingleProject key={project.id} projectAtr={project}/>);
class OtherProjects extends Component {
    render() {
        return (
            <>
                <section>
                    <div className="container">
                        {projectArray}
                    </div>
                </section>

            </>
        )
    }
}

export default OtherProjects