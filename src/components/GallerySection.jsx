import { useNavigate } from "react-router-dom"
import { projects } from "../utils/constants"


const ProjectGallery = () => {
    const navigate = useNavigate();
    //let location = useLocation();

    //console.log(location);
    let RedirectToProject = (e) => {
    
        let curr = e.currentTarget.firstElementChild.nextSibling.textContent;
        navigate(`/Project/${curr}`,{replace: true});
     
     }

    return(
        <>
        {Object.keys(projects).map((key) => {
            const project = projects[key];
            return(
              
                <div className="singleProject" onClick={RedirectToProject} key={key}>
                    <img src={project.headerImg} alt="projectHeading" />
                    <h1>{project.projectName}</h1>
                    <p>{project.typeOfProject}</p>
                </div>
               
            )
        })}
        </>
    )
}

export default ProjectGallery;