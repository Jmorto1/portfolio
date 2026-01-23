import "../styles/projects.css"
import { useState,useEffect,useRef} from "react";
import { FaReact, FaNodeJs, FaCss3Alt } from "react-icons/fa";
export default function Project(){
    const projectRef = useRef([]);
    const selectedProjectRef=useRef(null);
    const [selectedProject,setSelectedProject]=useState(null);
    const projects=[{
        id:"1",
        img:"images/projects/demo.jpg",
        name:"Project Name",
        desc:"Short description of the project...",
        liveLink:"#",
        sourceLink:"#",
        tech:["React","Node.js"],
        longDesc:"long description",
        techTags: [
            { name: "React", icon: FaReact },
            { name: "Node.js", icon: FaNodeJs },
            { name: "CSS", icon: FaCss3Alt }
        ]
    },
        {id:"2",
        img:"images/projects/ethio_calendar.png",
        name:"Project Name",
        desc:"Short description of the project...",
        
        liveLink:"https://ethio-calendar.vercel.app/",
        sourceLink:"https://github.com/Jmorto1/ethio-calendar",
        tech:["React","Node.js"],
        longDesc:"long description",
        techTags: [
            { name: "React", icon: FaReact },
            { name: "Node.js", icon: FaNodeJs },
            { name: "CSS", icon: FaCss3Alt }
        ]
    },{id:"3",
        img:"images/projects/demo.jpg",
        name:"Project Name",
        desc:"Short description of the project...",
        liveLink:"#",
        sourceLink:"#",
        tech:["React","Node.js"],
        longDesc:"long description",
        techTags: [
            { name: "React", icon: FaReact },
            { name: "Node.js", icon: FaNodeJs },
            { name: "CSS", icon: FaCss3Alt }
        ]
    },{id:"4",
        img:"images/projects/demo.jpg",
        name:"Project Name",
        desc:"Short description of the project...",
        liveLink:"#",
        sourceLink:"#",
        tech:["React","Node.js"],
        longDesc:"long description",
        techTags: [
            { name: "React", icon: FaReact },
            { name: "Node.js", icon: FaNodeJs },
            { name: "CSS", icon: FaCss3Alt }
        ]
    },{id:"5",
        img:"images/projects/demo.jpg",
        name:"Project Name",
        desc:"Short description of the project...",
        liveLink:"#",
        sourceLink:"#",
        tech:["React","Node.js"],
        longDesc:"long description",
        techTags: [
            { name: "React", icon: FaReact },
            { name: "Node.js", icon: FaNodeJs },
            { name: "CSS", icon: FaCss3Alt }
        ]
    },{id:"6",
        img:"images/projects/demo.jpg",
        name:"Project Name",
        desc:"Short description of the project...",
        liveLink:"#",
        sourceLink:"#",
        tech:["React","Node.js"],
        longDesc:"long description",
        techTags: [
            { name: "React", icon: FaReact },
            { name: "Node.js", icon: FaNodeJs },
            { name: "CSS", icon: FaCss3Alt }
        ]
    },{id:"7",
        img:"images/projects/demo.jpg",
        name:"Project Name",
        desc:"Short description of the project...",
        liveLink:"#",
        sourceLink:"#",
        tech:["React","Node.js"],
        longDesc:"long description",
        techTags: [
            { name: "React", icon: FaReact },
            { name: "Node.js", icon: FaNodeJs },
            { name: "CSS", icon: FaCss3Alt }
        ]
    }]
    useEffect(()=>{
        const handleClickOutside=(e)=>{
            if(!selectedProject) return;
        const selectedEl=selectedProjectRef.current;
        if(selectedEl && !selectedEl.contains(e.target)){
            setSelectedProject(null);
        }

        }
        document.addEventListener("mousedown",handleClickOutside);
        return()=>{
            document.removeEventListener("mousedown",handleClickOutside);
        }
    },[selectedProject])
    return(
        <div className="projects-grid">
            {
                projects.map(project=>(
                    <div className={(selectedProject && selectedProject.id === project.id) ? "selectedProject" : "project-card"}
                        key={project.id}
                        ref={el=>projectRef.current[project.id]=el}
                        > 
                        {(!selectedProject || selectedProject.id!==project.id) &&    
                        <>
                        <div className="image-container">
                             <img className ="image" src={project.img} />
                        </div>
                        <div className="project-details">
                            <div className="project-info">
                                <div>
                                    <h3>{project.name}</h3>
                                    <p>{project.desc}</p>
                                </div>  
                            </div>
                            <div className="tech-tags">
                                {project.techTags.map((tag,index)=>(
                                    <span key={index} className="tag"><tag.icon /></span>
                                ))}
                            </div> 
        
                            <div className="learn"
                                onClick={()=>setSelectedProject(project)}
                            >  read more</div>
                        </div>
                        </>    } 
                            
                        
                    </div>))
            }  
            {selectedProject && <div className="overlay">
                <div className="project-card selected"
                ref={el=>selectedProjectRef.current=el}
                        > 
                        <div>
                             <img className ="image" src={selectedProject.img} />
                        </div>
                        <div className="project-details">
                            <div className="project-info">
                            <div>
                                <h3>{selectedProject.name}</h3>
                                <p>{selectedProject.desc}</p>
                            </div>
                            
                                <div className="actions">
                                    <a href={selectedProject.liveLink} target="_blank" rel="noopener noreferrer">Live site</a>
                                    <a href={selectedProject.sourceLink} target="_blank" rel="noopener noreferrer">Source Code</a>
                                </div>
                            </div>
                            <div className="tech-tags">
                                {selectedProject.techTags.map((tag,index)=>(
                                    <span key={index} className="tag"><tag.icon /></span>
                                ))}
                            </div> 
                            <div className="longDesc">
                
                                {selectedProject.longDesc}
                            </div>
        
                            <div className="learn"
                                onClick={()=>setSelectedProject(null)}
                            > read less</div>
                        </div>
                    </div>

                </div>}
        </div>
    );
}