// XP-style desktop icons components using authentic Windows XP assets

// 3D Pinball for Windows XP icon
export function PinballIcon() {
  return (
    <img
      src="/assets/icons/pinball.png"
      alt="3D Pinball"
      className="xp-icon"
      style={{ width: '100%', height: '100%', objectFit: 'contain' }}
      draggable={false}
    />
  )
}

// About Me — authentic XP dialer / network multi-color disc icon
export function AboutMeIcon() {
  return (
    <img
      src="/assets/icons/about-me.webp"
      alt="About Me"
      className="xp-icon"
      style={{ width: '100%', height: '100%', objectFit: 'contain' }}
      draggable={false}
    />
  )
}

// My Resume — authentic Acrobat PDF document icon
export function ResumeIcon() {
  return (
    <img
      src="/assets/icons/my-resume.webp"
      alt="My Resume"
      className="xp-icon"
      style={{ width: '100%', height: '100%', objectFit: 'contain' }}
      draggable={false}
    />
  )
}

// My Projects — authentic Internet Explorer 6 3D icon
export function ProjectsIcon() {
  return (
    <img
      src="/assets/icons/my-projects.webp"
      alt="My Projects"
      className="xp-icon"
      style={{ width: '100%', height: '100%', objectFit: 'contain' }}
      draggable={false}
    />
  )
}

// Contact Me — authentic Outlook Express postcard with dual circular arrows
export function ContactIcon() {
  return (
    <img
      src="/assets/icons/contact-me.webp"
      alt="Contact Me"
      className="xp-icon"
      style={{ width: '100%', height: '100%', objectFit: 'contain' }}
      draggable={false}
    />
  )
}

// LinkedIn — "in" box logo
export function LinkedInIcon() {
  return (
    <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" className="xp-icon">
      <defs>
        <linearGradient id="li-grad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#0a88c2"/>
          <stop offset="100%" stopColor="#0066a0"/>
        </linearGradient>
      </defs>
      <rect x="6" y="6" width="52" height="52" rx="8" fill="url(#li-grad)"/>
      <text x="32" y="46" textAnchor="middle" fill="#fff" fontSize="30" fontWeight="bold" fontFamily="Arial, sans-serif">in</text>
    </svg>
  )
}
