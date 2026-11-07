import XPWindow from './XPWindow'
import './windows.css'

export default function ResumeWindow(props) {
  return (
    <XPWindow
      title="My Resume"
      icon={<img src="/assets/icons/my-resume.webp" alt="" width="16" height="16" style={{ verticalAlign: 'middle', objectFit: 'contain' }} />}
      defaultPos={{ x: 200, y: 100 }}
      {...props}
    >
      <div className="win-resume">
        <div className="resume-download-only">
          <div className="resume-pdf-icon">
            <img src="/assets/icons/my-resume.webp" alt="PDF" width="56" height="56" style={{ objectFit: 'contain' }} />
          </div>
          <h2>Yash_Panchal_Resume.pdf</h2>
          <p>Click below to view or download my resume</p>
          <a
            className="resume-download"
            href="/assets/resume/Yash_Panchal_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            📥 Download PDF Resume
          </a>
        </div>
      </div>
    </XPWindow>
  )
}
