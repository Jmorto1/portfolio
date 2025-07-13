import {Link,Outlet} from "react-router-dom"
import { FaHome,FaUser,FaCode,FaFileAlt} from 'react-icons/fa'; 
import style from "../styles/header.module.css"
import { useState,useEffect,useRef} from "react";
import { useLocation } from "react-router-dom";
export default function Header(){
    const [toggle,setToggle]=useState(false);
    const [isMobile,setIsmobile]=useState(window.innerWidth<=786);
    const navRef=useRef();
    const location=useLocation();
    useEffect(() => {
    const handleResize = () => {
        setIsmobile(window.innerWidth <= 768);
        console.log('hey');
        if(window.innerWidth > 768 && toggle){
            console.log("hellow i am from phone");
            setToggle(false);
        }
    };

    const handleClick = (e) => {
        if (toggle && navRef.current && !navRef.current.contains(e.target)) {
        setToggle(false);
        }
    };

    const handleScroll = () => {
        if (toggle) {
        setToggle(false);
        }
    };

    window.addEventListener("resize", handleResize);
    document.addEventListener("mousedown", handleClick);
    window.addEventListener("scroll", handleScroll);

    return () => {
        window.removeEventListener("resize", handleResize);
        document.removeEventListener("mousedown", handleClick);
        window.removeEventListener("scroll", handleScroll);
    };
    }, [toggle]);

      useEffect(() => {
        if (isMobile && toggle) {
            setToggle(false);
        }
    }, [location]);
      
    return(
        <>
        <div className={style.headerContainer}>
            <header className={style.header}>
                <nav className={style.nav} ref={navRef}>
                {isMobile && <div className={style.menuContainer}>
                   {!toggle && <button className="menu" onClick={()=>setToggle(true)}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <line x1="3" y1="12" x2="21" y2="12" />
                            <line x1="3" y1="6" x2="21" y2="6" />
                            <line x1="3" y1="18" x2="21" y2="18" />
                        </svg>

                    </button>}
                    {toggle && <button className="removeMenu" onClick={()=>setToggle(false)}>
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        >
                        <line x1="18" y1="6" x2="6" y2="18" />
                        <line x1="6" y1="6" x2="18" y2="18" />
                        </svg>
                    </button>}
                </div>}
                    { (!isMobile || toggle) && <ul className={style.navList}>
                        <li className={style.navItem}><Link to="/"><FaHome/> Home</Link></li>
                        <li className={style.navItem}><Link to="/about"><FaUser/> About me</Link></li>
                        <li className={style.navItem}><Link to="/projects"><FaCode/> Projects</Link></li>
                        <li className={style.navItem}><Link to="/resume"><FaFileAlt/> Resume</Link></li>
                    </ul>}
                </nav>
            </header>
        </div>
        <Outlet/>
        </>
    );
}