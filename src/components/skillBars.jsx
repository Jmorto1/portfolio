import React, {useEffect} from "react";

import "../styles/skillsBar.css"
export default function SkillBars() {
  useEffect(()=>{
    const handleResize=()=>{
        if(window.innerWidth<=812 && window.innerWidth>768){
            document.getElementsByClassName("js")[0].innerHTML="js";
        }
        else{
          document.getElementsByClassName("js")[0].innerHTML="JavaScript";
        }
    }   
    window.addEventListener("resize",handleResize);
    return()=>window.removeEventListener("resize",handleResize);
  });
  return (
    <div className="skills">
      {/* Python */}
      <div>
        <div>
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
            alt="Python"
            width="24"
            height="24"
          />
          <span className="python"> Python</span>
        </div>
      </div>
      {/* C++ */}
      <div>
      <div>
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg"
            alt="C++"
            width="24"
            height="24"
          />
          <span className="cpp"> C++</span>
        </div>
      </div>
      {/* Java */}
      <div>
        <div>
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg"
            alt="Java"
            width="24"
            height="24"
          />
          <span className="java"> Java</span>
        </div>
      </div>

      {/* JavaScript */}
      <div>
        <div>
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
            alt="JavaScript"
            width="24"
            height="24"
          />
          <span className="js"> JavaScript</span>
        </div>
      </div>
    </div>
  );
}
