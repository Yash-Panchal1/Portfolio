import './StartMenu.css'

// ── SVG Icons ──

function GitHubIcon() {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" className="sm-svg">
      <path d="M12 1C5.92 1 1 5.92 1 12c0 4.86 3.15 8.98 7.52 10.44.55.1.75-.24.75-.53v-1.85c-3.06.67-3.7-1.47-3.7-1.47-.5-1.27-1.22-1.6-1.22-1.6-1-.68.08-.67.08-.67 1.1.08 1.68 1.13 1.68 1.13.98 1.68 2.57 1.2 3.2.92.1-.71.38-1.2.7-1.47-2.44-.28-5.01-1.22-5.01-5.44 0-1.2.43-2.18 1.13-2.95-.11-.28-.49-1.4.11-2.91 0 0 .92-.3 3.02 1.13a10.5 10.5 0 015.5 0c2.1-1.43 3.02-1.13 3.02-1.13.6 1.51.22 2.63.11 2.91.7.77 1.13 1.75 1.13 2.95 0 4.23-2.58 5.16-5.03 5.43.4.34.75 1.01.75 2.04v3.02c0 .29.2.64.76.53A11.01 11.01 0 0023 12c0-6.08-4.92-11-11-11z"
        fill="#fff"/>
    </svg>
  )
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 64 64" width="22" height="22" className="sm-svg">
      <defs>
        <linearGradient id="sm-li" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#0a88c2"/>
          <stop offset="100%" stopColor="#0066a0"/>
        </linearGradient>
      </defs>
      <rect x="6" y="6" width="52" height="52" rx="8" fill="url(#sm-li)"/>
      <text x="32" y="46" textAnchor="middle" fill="#fff" fontSize="30" fontWeight="bold" fontFamily="Arial">in</text>
    </svg>
  )
}

function AboutMeIcon() {
  return (
    <img
      src="/assets/icons/about-me.webp"
      alt="About Me"
      width="28"
      height="28"
      style={{ objectFit: 'contain' }}
      draggable={false}
    />
  )
}

function ResumeIcon() {
  return (
    <img
      src="/assets/icons/my-resume.webp"
      alt="Resume"
      width="28"
      height="28"
      style={{ objectFit: 'contain' }}
      draggable={false}
    />
  )
}

function ProjectsIcon() {
  return (
    <img
      src="/assets/icons/my-projects.webp"
      alt="Projects"
      width="28"
      height="28"
      style={{ objectFit: 'contain' }}
      draggable={false}
    />
  )
}

function ContactIcon() {
  return (
    <img
      src="/assets/icons/contact-me.webp"
      alt="Contact"
      width="28"
      height="28"
      style={{ objectFit: 'contain' }}
      draggable={false}
    />
  )
}

function RecentIcon() {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" className="sm-svg">
      <circle cx="12" cy="12" r="10" fill="none" stroke="#555" strokeWidth="2"/>
      <circle cx="12" cy="12" r="10" fill="#333"/>
      <circle cx="12" cy="12" r="8" fill="none" stroke="#aaa" strokeWidth="1.5"/>
      <line x1="12" y1="6" x2="12" y2="12" stroke="#fff" strokeWidth="1.5" strokeLinecap="round"/>
      <line x1="12" y1="12" x2="16" y2="14" stroke="#fff" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  )
}

export default function StartMenu({ onClose, onOpenWindow, onLogOff }) {
  const handleClick = (id) => {
    onOpenWindow(id)
    onClose()
  }

  const handleExternal = (url) => {
    window.open(url, '_blank')
    onClose()
  }

  return (
    <div className="start-menu">
      {/* ── Header ── */}
      <div className="start-header">
        <div className="start-avatar">
          <img src="/assets/avatar/yash-avatar.png" alt="Yash" className="start-avatar-img" onError={(e) => { e.currentTarget.style.display = 'none'; e.currentTarget.parentNode.innerText = 'YP'; }} />
        </div>
        <span className="start-username">Yash Panchal</span>
      </div>

      {/* ── Body ── */}
      <div className="start-body">
        {/* LEFT column */}
        <div className="start-left">
          <div className="start-pinned">
            <button className="start-item" onClick={() => handleClick('projects')}>
              <span className="si-icon"><ProjectsIcon /></span>
              <div className="si-text">
                <span className="si-name">My Projects</span>
                <span className="si-desc">View my work</span>
              </div>
            </button>
            <button className="start-item" onClick={() => handleClick('contact')}>
              <span className="si-icon"><ContactIcon /></span>
              <div className="si-text">
                <span className="si-name">Contact Me</span>
                <span className="si-desc">Send me a message</span>
              </div>
            </button>
          </div>

          <div className="start-sep"></div>

          <button className="start-item" onClick={() => handleClick('about')}>
            <span className="si-icon"><AboutMeIcon /></span>
            <div className="si-text"><span className="si-name">About Me</span></div>
          </button>
          <button className="start-item" onClick={() => handleClick('pinball')}>
            <span className="si-icon">
              <img
                src="/assets/icons/pinball.png"
                alt="3D Pinball"
                width="28"
                height="28"
                style={{ objectFit: 'contain' }}
              />
            </span>
            <div className="si-text">
              <span className="si-name">3D Pinball</span>
              <span className="si-desc">Space Cadet</span>
            </div>
          </button>
          <button className="start-item" onClick={() => handleClick('resume')}>
            <span className="si-icon"><ResumeIcon /></span>
            <div className="si-text"><span className="si-name">My Resume</span></div>
          </button>

          <div className="start-sep"></div>

          <button className="start-item all-programs">
            <span className="si-name">All Programs</span>
            <span className="si-arrow">▶</span>
          </button>
        </div>

        {/* RIGHT column */}
        <div className="start-right">
          <button className="start-item-r" onClick={() => handleExternal('https://github.com/Yash-Panchal1')}>
            <span className="si-icon-r"><GitHubIcon /></span>
            <span>GitHub</span>
          </button>
          <button className="start-item-r" onClick={() => handleExternal('https://www.linkedin.com/in/yash-panchal-92948725a/')}>
            <span className="si-icon-r"><LinkedInIcon /></span>
            <span>LinkedIn</span>
          </button>

          <div className="start-sep-r"></div>

          <button className="start-item-r">
            <span className="si-icon-r"><RecentIcon /></span>
            <span>Recently Used</span>
            <span className="si-arrow-r">▶</span>
          </button>

          <div className="start-sep-r"></div>
        </div>
      </div>

      {/* ── Footer ── */}
      <div className="start-footer">
        <button className="start-foot-btn" onClick={onLogOff}>
          <img
            src="/assets/icons/logoff-key.png"
            alt="Log Off"
            width="20"
            height="20"
            className="foot-svg"
            style={{ objectFit: 'contain' }}
          />
          <span>Log Off</span>
        </button>
        <button className="start-foot-btn" onClick={() => window.location.reload()}>
          <img
            src="/assets/icons/shutdown-noborder.png"
            alt="Shut Down"
            width="20"
            height="20"
            className="foot-svg"
            style={{ objectFit: 'contain' }}
          />
          <span>Shut Down</span>
        </button>
      </div>
    </div>
  )
}
