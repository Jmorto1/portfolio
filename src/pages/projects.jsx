import "../styles/projects.css"
import { useState,useEffect,useRef} from "react";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
import { SiTypescript, SiDjango, SiFlutter } from "react-icons/si";
import { DiJava } from "react-icons/di";

export default function Project(){
    const projectRef = useRef([]);
    const selectedProjectRef=useRef(null);
    const [selectedProject,setSelectedProject]=useState(null);
    const projects=[{
        id:"1",
        img:"images/projects/daily-task-management.png",
        name:"Daily Task Management",
        desc:"Daily task management  ERP system for subcities",
        liveLink:"https://daily-task-management-two.vercel.app/",
        sourceLink:"https://github.com/Jmorto1/daily-task-management",
        tech:["React","Node.js"],
        longDesc:"This project is a comprehensive daily task management system designed for subcities, supporting multiple departments and teams. It enables hierarchical organization of services from departments to teams, and from teams to individual employees ensuring tasks are clearly assigned and tracked. Employees can submit or download detailed reports on their activities, allowing managers to monitor progress, evaluate performance, and maintain efficient workflow across all organizational levels.",
        techTags: [
            { name: "React", icon: FaReact },
            { name: "Django", icon: SiDjango },
            { name: "TypeScript", icon: SiTypescript}
        ]
    },
        {id:"2",
        img:"images/projects/ethio_calendar.png",
        name:"Ethiopian Calendar",
        desc:"Ethiopian Calendar input field for React applications",
        liveLink:"https://ethio-calendar.vercel.app/",
        sourceLink:"https://github.com/Jmorto1/ethio-calendar",
        tech:["React","Node.js"],
        longDesc:"A lightweight and customizable Ethiopian Calendar input field for React (TypeScript + Vite).It works just like the native HTML <input type='date'/>, but supports the Ethiopian calendar system.Perfect for modern web apps that need localized date entry.",
        techTags: [
            { name: "React", icon: FaReact },
            { name: "TypeScript", icon: SiTypescript}
        ]
    },{id:"3",
        img:"images/projects/map.png",
        name:"Medicine Availability Platform",
        desc:"A platform to check the availability of medicines in nearby pharmacies",
        liveLink:"https://map-fp.vercel.app/",
        sourceLink:"https://github.com/redi-b/map",
        tech:["NextJs","NodeJs"],
        longDesc:"A platform that lets users search for medicine availability at nearby pharmacies, upload prescriptions, set medicine adherence reminders, and consult an AI chatbot for medicine-related questions.",
            techTags: [
            { name: "NextJs", icon: SiNextdotjs },
            {name:"NodeJs", icon: FaNodeJs}
        ]
    },{id:"4",
        img:"images/projects/airline.png",
        name:"AirSync",
        desc:"A mobile app for airline passengers to track flight status and gate information",
        sourceLink:"https://github.com/redi-b/airsync",
        tech:["Flutter"],
        longDesc:"AirSync is a mobile app for airline passengers built with Flutter which offers features such as flight status tracking, gate information, and in-app notifications, all while maintaining a visually appealing and user-friendly interface. It combines modern design features like glassmorphism, gradients, and micro-animations with a real-time Firebase Firestore backend to provide a smooth travel experience.",
            techTags: [
            { name: "Flutter", icon: SiFlutter},
        ]
    },
    {id:"5",
        img:"images/projects/pprs.png",
        name:"Preemitive Priority Scheduling Simulator",
        desc:"Simulator for Preemptive Priority Scheduling Algorithm in Operating Systems",
        sourceLink:"https://github.com/Jmorto1/preemptive-priority-scheduling-GUI",
        tech:["Java","Swing"],
        longDesc:"This project is a simulator for the Preemptive Priority Scheduling Algorithm used in operating systems. It allows users to visualize how processes are scheduled based on their priority levels. The simulator provides an interactive interface for users to input process details, such as arrival time, burst time, and priority, and then observe the scheduling behavior through graphical representations and performance metrics.",
        techTags: [
            { name: "Java", icon: DiJava }
        ]
    }
]
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
                                    {selectedProject.liveLink &&<a href={selectedProject.liveLink} target="_blank" rel="noopener noreferrer">Live site</a>}
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