import style from "../styles/about.module.css"
import {FaGraduationCap, FaCalendarAlt} from "react-icons/fa"
import SkillsOrbit from "../components/skillsOrbit";
import SkillBars from "../components/skillBars";
import { useState,useEffect,useRef, use } from "react";
export default function About(){
    const navItemRefs = useRef([]);
    const sectionRefs = useRef([]);
    const [activeIndex, setActiveIndex] = useState(0);

    const scrollToIndex = (index) => {
        if (index >= 0 && index < sectionRefs.current.length) {
        sectionRefs.current[index].scrollIntoView({ behavior: "smooth" });
        setActiveIndex(index);
        }
    };
    useEffect(() => {
        const observer=new IntersectionObserver((entities)=>{
            entities.forEach(entity=>{
                if (entity.isIntersecting){
                    const index=sectionRefs.current.findIndex(el=>el===entity.target);
                    if (index!==-1){
                        setActiveIndex(index);
                    }
                }
            });
        },{
            root: document.querySelector(`.${style.scrollSections}`),
            threshold:0.6
        });
        sectionRefs.current.forEach(el=>{
            if (el) observer.observe(el);
        });
        return ()=>{
            sectionRefs.current.forEach(el => {
                if (el) observer.unobserve(el);
              });
              observer.disconnect();
        }
    },[]);
    useEffect(() => {
        const item =navItemRefs.current[activeIndex];
        const highlight = document.querySelector(`.${style.highlight}`);
        const { offsetLeft, offsetWidth } = item;
        highlight.style.left = `${offsetLeft}px`;
        highlight.style.width = `${offsetWidth}px`;
    }, [activeIndex]);
    
    return(
        <div className={style.aboutPage}>
            <div className={style.logo} >
                <div className={style.logoImage}></div>
            </div>
            <div className={style.aboutContainer}>
                <nav className={style.navbar}>
                    <ul className={style.navList}>
                        <li  className={style.navItem} onClick={() => scrollToIndex(0)} ref={el=>navItemRefs.current[0]=el}>About</li>
                        <li className={style.navItem} onClick={() => scrollToIndex(1)} ref={el=>navItemRefs.current[1]=el}>Interest</li>
                        <li className={style.navItem} onClick={() => scrollToIndex(2)} ref={el=>navItemRefs.current[2]=el}>Education</li>
                        <li className={style.navItem} onClick={() => scrollToIndex(3)} ref={el=>navItemRefs.current[3]=el}>Language</li>
                        <li className={style.highlight}></li>
                    </ul>
                </nav>
                <div className={style.scrollSections}>
                    <section className={style.aboutSection} ref={el=>{
                        sectionRefs.current[0]=el;
                    }}>
                        <div className={style.aboutDiv}>
                        <div className={style.intro}>
                                👋 <strong>Hello!</strong> I am <span className={style.name}>Yealem Birhanu Kassaye</span>
                            </div>
                            <div>
                                <p className={style.aboutText}>
                                    I am a 4<sup>th</sup> year Computer Science student at Addis Ababa University.
                                </p>
                                <p>Apart from coding, some other activities that I love to do!</p>
                                <ul>
                                    <li className="about-activity"><svg stroke="currentColor" fill="currentColor" strokeWidth="0" version="1.1" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M6.5 15h2.5c0.827 0 1.5-0.673 1.5-1.5 0-0.267-0.070-0.518-0.193-0.736 0.417-0.267 0.693-0.734 0.693-1.264 0-0.384-0.145-0.734-0.383-1 0.238-0.266 0.383-0.616 0.383-1 0-0.175-0.030-0.344-0.086-0.5h3.586c0.827 0 1.5-0.673 1.5-1.5s-0.673-1.5-1.5-1.5h-6.167l1.466-2.75c0.131-0.227 0.201-0.486 0.201-0.75 0-0.827-0.673-1.5-1.5-1.5-0.412 0-0.796 0.164-1.082 0.461-0.004 0.004-0.007 0.008-0.011 0.012l-3.407 3.737v-0.71c0-0.276-0.224-0.5-0.5-0.5h-3c-0.276 0-0.5 0.224-0.5 0.5v10c0 0.276 0.224 0.5 0.5 0.5h3c0.276 0 0.5-0.224 0.5-0.5v-0.691l2.276 1.138c0.069 0.035 0.146 0.053 0.224 0.053zM2.5 14c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5 0.5 0.224 0.5 0.5-0.224 0.5-0.5 0.5zM6.618 14l-2.618-1.309v-5.997l4.143-4.544c0.095-0.097 0.221-0.15 0.357-0.15 0.276 0 0.5 0.224 0.5 0.5 0 0.085-0.020 0.166-0.061 0.239-0.005 0.008-0.010 0.017-0.014 0.025l-1.866 3.5c-0.083 0.155-0.078 0.342 0.013 0.492s0.253 0.243 0.429 0.243h7c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5h-5c-0.276 0-0.5 0.224-0.5 0.5s0.224 0.5 0.5 0.5c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5c-0.276 0-0.5 0.224-0.5 0.5s0.224 0.5 0.5 0.5c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5h-0.5c-0.276 0-0.5 0.224-0.5 0.5s0.224 0.5 0.5 0.5c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5h-2.382z"></path></svg> Playing Football</li>
                                    <li className="about-activity"><svg stroke="currentColor" fill="currentColor" sstrokeWidth="0" version="1.1" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M6.5 15h2.5c0.827 0 1.5-0.673 1.5-1.5 0-0.267-0.070-0.518-0.193-0.736 0.417-0.267 0.693-0.734 0.693-1.264 0-0.384-0.145-0.734-0.383-1 0.238-0.266 0.383-0.616 0.383-1 0-0.175-0.030-0.344-0.086-0.5h3.586c0.827 0 1.5-0.673 1.5-1.5s-0.673-1.5-1.5-1.5h-6.167l1.466-2.75c0.131-0.227 0.201-0.486 0.201-0.75 0-0.827-0.673-1.5-1.5-1.5-0.412 0-0.796 0.164-1.082 0.461-0.004 0.004-0.007 0.008-0.011 0.012l-3.407 3.737v-0.71c0-0.276-0.224-0.5-0.5-0.5h-3c-0.276 0-0.5 0.224-0.5 0.5v10c0 0.276 0.224 0.5 0.5 0.5h3c0.276 0 0.5-0.224 0.5-0.5v-0.691l2.276 1.138c0.069 0.035 0.146 0.053 0.224 0.053zM2.5 14c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5 0.5 0.224 0.5 0.5-0.224 0.5-0.5 0.5zM6.618 14l-2.618-1.309v-5.997l4.143-4.544c0.095-0.097 0.221-0.15 0.357-0.15 0.276 0 0.5 0.224 0.5 0.5 0 0.085-0.020 0.166-0.061 0.239-0.005 0.008-0.010 0.017-0.014 0.025l-1.866 3.5c-0.083 0.155-0.078 0.342 0.013 0.492s0.253 0.243 0.429 0.243h7c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5h-5c-0.276 0-0.5 0.224-0.5 0.5s0.224 0.5 0.5 0.5c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5c-0.276 0-0.5 0.224-0.5 0.5s0.224 0.5 0.5 0.5c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5h-0.5c-0.276 0-0.5 0.224-0.5 0.5s0.224 0.5 0.5 0.5c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5h-2.382z"></path></svg> Travelling</li>
                                </ul>
                            </div>
                        </div>
                    </section>
                    <section className={style.interestSection} ref={el=>{
                        sectionRefs.current[1]=el;
                    }}>
                        
                        <div className={style.interestDiv}>
                                <div className={style.interestTitle}>Interest</div>
                                
                                <div>I'm passionate about frontend and backend development, AI infrastructure, and system architecture. I focus on building clean, practical, and maintainable software, with current interests in Backend Engineering, DevOps, and Machine Learning. I enjoy solving real-world problems that challenge my thinking and help me grow. Check out my projects on <a href="https://github.com/Jmorto1" target="_blank">GitHub</a>, and feel free to connect or collaborate.</div>
                        </div>
                    </section>
                    <section className={style.educationSection} ref={(el)=>{
                        sectionRefs.current[2]=el;
                    }}>
                        <div className={style.educationDiv}>
                            <div className={style.educationTitle}>Education</div>
                            <div className={style.educationContent}>
                                <div className={style.educationHeader}>
                                    <FaGraduationCap/>
                                </div>
                                <div className={style.educationDetails}>
                                    <div className={style.educationInstitution}>Addis Ababa University</div>
                                    <div>Bachelor of Science in Computer Science</div>
                                    <div><FaCalendarAlt className={style.educationDate}/> 2022 - 2026 </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className={style.skillsSection} ref={(el)=>{
                        sectionRefs.current[3]=el;
                    }}>
                        <div className={style.skillsDiv}>
                            <div className={style.skillsHeader}>
                                Languages & Frameworks/tech
                            </div>
                            <div className={style.skillsOrbit}>
                                <SkillsOrbit/>
                            </div>
                            <div className={style.skillBars}>
                                <SkillBars/>
                            </div>
                        </div>
                    </section>
                </div>
                <div className={style.scrollSection}>
                    <button className={style.scrollUp}
                    onClick={() => scrollToIndex(activeIndex - 1)}
                    disabled={activeIndex === 0}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                            className="lucide lucide-chevron-up">
                            <path d="m18 15-6-6-6 6"></path>
                        </svg>
                    </button>
                    <div className={style.scrollIndicator}>
                        <div className={style.dot} style={{ background: activeIndex === 0 ? "green" :"#a0b2b9" }}></div>
                        <div className={style.dot} style={{ background: activeIndex === 1? "green": "#a0b2b9"}}></div>
                        <div className={style.dot} style={{ background: activeIndex === 2? "green": "#a0b2b9"}}></div>
                        <div className={style.dot} style={{ background: activeIndex === 3? "green": "#a0b2b9"}}></div>
                    </div>
                    <button className={style.scrollDown} 
                        onClick={() => scrollToIndex(activeIndex + 1)}
                        disabled={activeIndex ===3}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                            className="lucide lucide-chevron-down">
                            <path d="m6 9 6 6 6-6"></path>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );

}