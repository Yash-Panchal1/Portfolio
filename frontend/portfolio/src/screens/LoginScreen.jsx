import './LoginScreen.css'

export default function LoginScreen({ onLogin }) {
  return (
    <div className="login-screen">

      {/* ── Top Blue Bar ── */}
      <div className="login-top-bar"></div>

      {/* ── Main panel ── */}
      <div className="login-panel">

        {/* LEFT COLUMN */}
        <div className="login-left">
          {/* Authentic Windows XP Logo with transparent background */}
          <img
            src="/assets/icons/windows-logo-transparent.png"
            alt="Windows Logo"
            className="login-win-logo"
          />

          {/* Name & XP Badge */}
          <div className="login-left-name">
            Yash Panchal<span className="xp-badge">xp</span>
          </div>
          <div className="login-left-role">MERN Stack Developer</div>
          <div className="login-left-hint">To begin, click on Yash Panchal to log in</div>
        </div>

        {/* VERTICAL DIVIDER */}
        <div className="login-divider"></div>

        {/* RIGHT COLUMN */}
        <button className="login-user-card" onClick={onLogin}>
          <div className="login-avatar">
            <img src="/assets/avatar/yash-avatar.png" alt="Yash" className="avatar-img" onError={(e) => { e.currentTarget.style.display = 'none'; e.currentTarget.parentNode.innerText = 'YP'; }} />
          </div>
          <div className="login-user-info">
            <span className="login-user-name">Yash Panchal</span>
            <span className="login-user-role">MERN Stack Developer</span>
            <span className="login-user-hint">Click your profile to enter</span>
          </div>
        </button>

      </div>

      {/* Center bottom text */}
      <p className="login-center-text">Your portfolio experience starts here</p>

      {/* ── Bottom bar ── */}
      <div className="login-bottom-bar">
        <button className="restart-btn" onClick={() => window.location.reload()}>
          <img
            src="/assets/icons/restart-xp.svg"
            alt="Restart"
            width="22"
            height="22"
            style={{ objectFit: 'contain' }}
          />
          <span>Restart Yash XP</span>
        </button>
        <p className="login-tagline">
          After you log on, the system's yours to explore.<br />
          Every detail has been designed with a purpose.
        </p>
      </div>

    </div>
  )
}
