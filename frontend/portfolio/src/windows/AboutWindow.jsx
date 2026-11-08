import XPWindow from './XPWindow'
import './windows.css'

export default function AboutWindow(props) {
  return (
    <XPWindow
      title="About Me"
      icon={<img src="/assets/icons/about-me.webp" alt="" width="16" height="16" style={{ verticalAlign: 'middle', objectFit: 'contain' }} />}
      defaultPos={{ x: 150, y: 80 }}
      {...props}
    >
      <div className="win-about">
        {/* Spinning ring wraps the circular avatar */}
        <div className="about-avatar-ring">
          <div className="about-avatar">
            <img src="/assets/avatar/yash-avatar.png" alt="Yash Panchal" className="about-avatar-img" onError={(e) => { e.currentTarget.style.display = 'none'; e.currentTarget.parentNode.innerText = '👨‍💻'; }} />
          </div>
        </div>
        <div className="about-body">
          <h2>Yash Panchal</h2>
          <h4>MERN Stack Developer</h4>
          <p>
            Hi, I'm <strong>Yash Panchal</strong>, a passionate <strong>MERN Stack Developer</strong> pursuing 
            a B.Tech in Information Technology (2025–2029) at <strong>JC Bose University of Science and Technology, 
            YMCA Faridabad</strong>.
          </p>
          <p>
            I enjoy building modern, responsive, and user-friendly web applications. I have hands-on 
            experience with <strong>HTML, CSS, JavaScript, React.js, Node.js, Express.js, and MongoDB</strong>.
          </p>
          <p>
            I also have experience working with <strong>REST APIs and WebSockets</strong>, which helps me build 
            dynamic applications with real-time communication and seamless backend integration.
          </p>
          <p>
            I'm passionate about learning new technologies, solving problems, and turning ideas into 
            functional web applications. I'm continuously improving my development skills and exploring 
            new opportunities to build impactful projects.
          </p>
          <div className="about-skills">
            {['HTML', 'CSS', 'JavaScript', 'React.js', 'Node.js', 'Express.js', 'MongoDB', 'REST APIs', 'Postman', 'WebSockets'].map(s => (
              <span key={s} className="skill-tag">{s}</span>
            ))}
          </div>
          <div className="about-facts">
            <div className="fact"><span>📍</span> Faridabad, India</div>
            <div className="fact"><span>🎓</span> B.Tech IT (2025–2029)</div>
            <div className="fact"><span>🏫</span> JC Bose University, YMCA</div>
            <div className="fact"><span>💼</span> Open to opportunities</div>
          </div>
        </div>
      </div>
    </XPWindow>
  )
}
