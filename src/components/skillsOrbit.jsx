import {
    FaPython, FaJava, FaJsSquare, FaHtml5, FaCss3Alt, FaReact, FaNodeJs,
    FaGitAlt, FaGithub, FaCode
  } from "react-icons/fa";
  
  import {
    SiTypescript, SiCplusplus, SiNextdotjs, SiExpress,
    SiCodeforces, SiLeetcode, SiIntellijidea
  } from "react-icons/si";
 
  import "../styles/skillsOrbit.css";
  
  export default function SkillsOrbit() {
    
    return (
      <div className="orbit-system">
        {/* Center Icon */}
          <div className="center-icon">👨‍💻</div>
    
        {/* Orbit Group 1 */}
        <div className="orbit-group orbit-x">
          <div className="orbit-icon"><FaPython /></div>
          <div className="orbit-icon"><SiCplusplus /></div>
          <div className="orbit-icon"><FaJava /></div>
          <div className="orbit-icon"><FaJsSquare /></div>
        </div>
  
        {/* Orbit Group 2 */}
        <div className="orbit-group orbit-y">
          <div className="orbit-icon"><SiTypescript /></div>
          <div className="orbit-icon"><FaHtml5 /></div>
          <div className="orbit-icon"><FaCss3Alt /></div>
          <div className="orbit-icon"><FaReact /></div>
        </div>
  
        {/* Orbit Group 3 */}
        <div className="orbit-group orbit-45">
          <div className="orbit-icon"><FaNodeJs /></div>
          <div className="orbit-icon"><SiNextdotjs /></div>
          <div className="orbit-icon"><SiExpress /></div>
          <div className="orbit-icon"><SiIntellijidea /></div>
        </div>
  
        {/* Orbit Group 4 */}
        <div className="orbit-group orbit-135" >
          <div className="orbit-icon"><FaGitAlt /></div>
          <div className="orbit-icon"><FaGithub /></div>
          <div className="orbit-icon"><SiCodeforces /></div>
          <div className="orbit-icon"><SiLeetcode /></div>
        </div>
  
        
        
      </div>
    );
  }
  