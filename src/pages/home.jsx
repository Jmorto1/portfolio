import style from "../styles/home.module.css"
import { useState, useEffect,useRef } from "react";
import { FaEnvelope, FaPhoneAlt, FaGithub, FaLinkedin, FaTelegramPlane,FaWhatsapp} from "react-icons/fa";
import photo from "/images/photo.png";
export default function Home() {
    const words = ["SOFTWARE ENGINEER", "FULLSTACK DEVELOPER"];
    const [text, setText] = useState("");
    const [wordIndex, setWordIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const contactRef=useRef();
    useEffect(() => {
        let typingSpeed = isDeleting ? 20 : 150;
        let timeout;

        const currentWord = words[wordIndex];

        if (!isDeleting && charIndex < currentWord.length) {
            timeout = setTimeout(() => {
                setText(currentWord.substring(0, charIndex + 1));
                setCharIndex(charIndex + 1);
            }, typingSpeed);
        } else if (!isDeleting && charIndex === currentWord.length) {
            timeout = setTimeout(() => {
                setIsDeleting(true);
            }, 2000);
        } else if (isDeleting && charIndex > 0) {
            timeout = setTimeout(() => {
                setText(currentWord.substring(0, charIndex - 1));
                setCharIndex(charIndex - 1);
            }, typingSpeed);
        } else if (isDeleting && charIndex === 0) {
            timeout = setTimeout(() => {
                setIsDeleting(false);
                setWordIndex((wordIndex + 1) % words.length);
            }, 1000);
        }

        return () => clearTimeout(timeout);
    }, [charIndex, isDeleting, wordIndex, words]);

    return (
        <div id={style.home} className={style.homePage}>
            <section className={style.heroSection}>
                <div className={style.heroContent}>
                    <h1 className={style.heroGreeting}>Hi There ! <span className={style.emoji}>👋🏻</span></h1>
                    <h1 className={style.heroName}>I'M <span className={style.highlight}>YEALEM BIRHANU</span></h1>
                    <h1 className={style.heroTitle}>{text}</h1>
                </div>
                <div className={style.heroImageWrapper}>
                    <div className={style.heroImageContainer}>
                        <img src={photo} alt="" className={style.heroImg} />
                    </div>
                </div>
            </section>
            <section className={style.introWrapper}>
                <div className={style.introTitle}>Let me introduce myself</div>
                <div className={style.introContent}>
                    <p>I'm a passionate developer with a strong love for programming — it's more than a skill, it's something I genuinely enjoy. Over time, I've gained hands-on experience and a growing confidence in what I've learned so far.</p>
                    <p>I enjoy working on web technologies, modern web products, and exploring AI-related innovations.I'm always eager to learn more and excited to collaborate on meaningful projects.</p>
                </div>
            </section>
            <section className={style.socialSection} ref={contactRef}>
                <div className={style.socialTitle}>FIND ME ON</div>
                <div className={style.socialSubtitle}>Feel free to connect with me</div>
                <div className={style.contactItems}>
                    <div>
                        <a href="tel:+251972213711">
                        <FaPhoneAlt size={24} />
                        <span>+251 972213711</span>
                        </a>
                    </div>
                    <div className={style.contactIcons}>
                        <a href="mailto:yealem082@gmail.com" target="_blank" rel="noopener noreferrer" title="yealem082@gmail.com">
                            <FaEnvelope size={24} />
                        </a>
                        <a href="https://github.com/Jmorto1" target="_blank" rel="noopener noreferrer">
                            <FaGithub size={24} />
                        </a>
                        <a href="https://www.linkedin.com/in/yealem-birhanu/" target="_blank" rel="noopener noreferrer">
                            <FaLinkedin size={24} />
                        </a>
                        <a href="https://t.me/Jmorto" target="_blank" rel="noopener noreferrer">
                            <FaTelegramPlane size={24} />
                        </a>
                        <a href="https://wa.me/251972213711" target="_blank" rel="noopener noreferrer">
                            <FaWhatsapp size={24} />
                        </a>
                    </div>
                </div>
            </section>
            
        </div>
    );
}