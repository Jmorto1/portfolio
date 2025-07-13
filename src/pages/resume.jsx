import style from"../styles/resume.module.css"
export default function Resume() {
  return (
    <div className={style.container}>
      <a href="/resume.pdf" download>
        <button className={style.btn}>
          Download Resume
        </button>
      </a>

      <iframe
        src="/resume.pdf#toolbar=0&navpanes=0&scrollbar=0"
        width="100%"
        height="889px"
        title="Resume Viewer"
        className={style.frm}
      ></iframe>
      <a href="/resume.pdf" download>
        <button className={style.btn}>
          Download Resume
        </button>
      </a>

    </div>
  );
}
