// Custom metadata (thumbnails, descriptions, tech stacks) for Yash's repositories
// If GitHub has no description or custom image, these beautiful assets and descriptions will be used!

export const REPO_CUSTOM_META = {
  'ChatApp': {
    title: 'ChatApp - Real-Time Messenger',
    description: 'A modern, full-stack real-time chat application built with React, Node.js, Express, MongoDB, and Socket.io. Features instant direct messaging, live online/offline user status indicators, typing indicators, and secure authentication.',
    techStack: ['React', 'Node.js', 'Socket.io', 'Express.js', 'MongoDB'],
    liveUrl: '',
    image: 'data:image/svg+xml;utf8,' + encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" width="600" height="300">
      <defs>
        <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#0f0c29"/><stop offset="50%" stop-color="#302b63"/><stop offset="100%" stop-color="#24243e"/></linearGradient>
        <linearGradient id="b1" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#7c3aed"/><stop offset="100%" stop-color="#4f46e5"/></linearGradient>
        <linearGradient id="b2" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#06b6d4"/><stop offset="100%" stop-color="#10b981"/></linearGradient>
      </defs>
      <rect width="600" height="300" fill="url(#bg)"/>
      <rect x="0" y="0" width="600" height="48" fill="rgba(255,255,255,0.06)"/>
      <circle cx="28" cy="24" r="14" fill="url(#b1)"/>
      <text x="28" y="29" text-anchor="middle" fill="#fff" font-family="Arial" font-size="11" font-weight="bold">YP</text>
      <text x="52" y="29" fill="#fff" font-family="Arial" font-size="15" font-weight="bold">ChatApp • Real-time Socket.io</text>
      <circle cx="560" cy="24" r="6" fill="#10b981"/>
      <rect x="25" y="70" width="280" height="60" rx="16" fill="url(#b1)"/>
      <text x="45" y="96" fill="#fff" font-family="Arial" font-size="13" font-weight="bold">Hey Yash! Project looks super clean! 🚀</text>
      <text x="45" y="115" fill="rgba(255,255,255,0.7)" font-family="Arial" font-size="10">Alex • 10:24 AM</text>
      <rect x="295" y="145" width="280" height="60" rx="16" fill="url(#b2)"/>
      <text x="315" y="171" fill="#fff" font-family="Arial" font-size="13" font-weight="bold">Thanks! Built with MERN &amp; WebSockets ⚡</text>
      <text x="315" y="190" fill="rgba(255,255,255,0.7)" font-family="Arial" font-size="10">You • 10:25 AM</text>
      <rect x="20" y="235" width="560" height="45" rx="22" fill="rgba(255,255,255,0.08)" stroke="rgba(255,255,255,0.15)"/>
      <text x="45" y="262" fill="rgba(255,255,255,0.4)" font-family="Arial" font-size="12">Type a message...</text>
      <circle cx="550" cy="257" r="15" fill="#7c3aed"/>
      <text x="550" y="262" text-anchor="middle" fill="#fff" font-size="12">➤</text>
    </svg>`)
  },

  'Todo-App': {
    title: 'Todo App - Task List',
    description: 'A clean, responsive task management web app built purely with HTML, CSS, and Vanilla JavaScript. Features dynamic DOM task creation, strike-through completion, task deletion, and localStorage persistence without external libraries.',
    techStack: ['HTML5', 'CSS3', 'Vanilla JavaScript', 'DOM Manipulation', 'LocalStorage'],
    liveUrl: '',
    image: 'data:image/svg+xml;utf8,' + encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" width="600" height="300">
      <defs>
        <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#0a1520"/><stop offset="50%" stop-color="#0d2238"/><stop offset="100%" stop-color="#071018"/></linearGradient>
        <linearGradient id="gold" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="#f59e0b"/><stop offset="100%" stop-color="#e11d48"/></linearGradient>
      </defs>
      <rect width="600" height="300" fill="url(#bg)"/>
      <rect x="0" y="0" width="600" height="48" fill="rgba(255,255,255,0.04)"/>
      <text x="30" y="31" fill="#f59e0b" font-family="Arial, sans-serif" font-size="16" font-weight="bold">⚡ Vanilla JS Todo App</text>
      <text x="560" y="31" text-anchor="end" fill="#94a3b8" font-family="Arial, sans-serif" font-size="11">HTML • CSS • JS</text>

      <!-- Task 1 (Completed) -->
      <rect x="30" y="70" width="540" height="42" rx="8" fill="rgba(245,158,11,0.08)" stroke="rgba(245,158,11,0.3)"/>
      <circle cx="55" cy="91" r="9" fill="#f59e0b"/>
      <text x="55" y="95" text-anchor="middle" fill="#000" font-family="Arial" font-size="10" font-weight="bold">✓</text>
      <text x="80" y="96" fill="#94a3b8" font-family="Arial, sans-serif" font-size="13" text-decoration="line-through">Design clean layout with HTML5 &amp; CSS3</text>
      <text x="545" y="96" text-anchor="end" fill="#f59e0b" font-family="Arial" font-size="11">Done</text>

      <!-- Task 2 (Pending) -->
      <rect x="30" y="125" width="540" height="42" rx="8" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.1)"/>
      <circle cx="55" cy="146" r="9" fill="transparent" stroke="#38bdf8" stroke-width="2"/>
      <text x="80" y="151" fill="#f1f5f9" font-family="Arial, sans-serif" font-size="13">Implement dynamic DOM CRUD operations</text>
      <text x="545" y="151" text-anchor="end" fill="#38bdf8" font-family="Arial" font-size="11">Pending</text>

      <!-- Task 3 (Pending) -->
      <rect x="30" y="180" width="540" height="42" rx="8" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.1)"/>
      <circle cx="55" cy="201" r="9" fill="transparent" stroke="#38bdf8" stroke-width="2"/>
      <text x="80" y="206" fill="#f1f5f9" font-family="Arial, sans-serif" font-size="13">Store and sync tasks in browser localStorage</text>
      <text x="545" y="206" text-anchor="end" fill="#38bdf8" font-family="Arial" font-size="11">Pending</text>

      <!-- Input Bar -->
      <rect x="30" y="238" width="435" height="40" rx="8" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.18)"/>
      <text x="50" y="263" fill="#64748b" font-family="Arial, sans-serif" font-size="12">Enter task name (Vanilla JS listener)...</text>
      <rect x="475" y="238" width="95" height="40" rx="8" fill="url(#gold)"/>
      <text x="522" y="263" text-anchor="middle" fill="#fff" font-family="Arial, sans-serif" font-size="13" font-weight="bold">+ Add Task</text>
    </svg>`)
  },

  'NetflixClone-Webpage': {
    title: 'Netflix Clone Webpage',
    description: 'A pixel-perfect, responsive Netflix desktop and mobile landing page clone. Features an authentic hero banner with dynamic backdrop, interactive FAQ accordion sections, and polished responsive carousels.',
    techStack: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Design'],
    liveUrl: '',
    image: 'data:image/svg+xml;utf8,' + encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" width="600" height="300">
      <defs>
        <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#141414"/><stop offset="100%" stop-color="#1a0000"/></linearGradient>
        <linearGradient id="red" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="#E50914"/><stop offset="100%" stop-color="#b20710"/></linearGradient>
      </defs>
      <rect width="600" height="300" fill="url(#bg)"/>
      <text x="30" y="42" fill="#E50914" font-family="Arial Black, Impact" font-size="28" font-weight="900" letter-spacing="1">NETFLIX</text>
      <rect x="490" y="20" width="80" height="30" rx="4" fill="#E50914"/>
      <text x="530" y="40" text-anchor="middle" fill="#fff" font-family="Arial" font-size="11" font-weight="bold">Sign In</text>
      <text x="300" y="115" text-anchor="middle" fill="#fff" font-family="Arial" font-size="22" font-weight="bold">Unlimited movies, TV shows and more</text>
      <text x="300" y="145" text-anchor="middle" fill="#fff" font-family="Arial" font-size="13">Watch anywhere. Cancel anytime.</text>
      <text x="300" y="180" text-anchor="middle" fill="#fff" font-family="Arial" font-size="11">Ready to watch? Enter your email to create or restart your membership.</text>
      <rect x="80" y="205" width="310" height="42" rx="4" fill="rgba(0,0,0,0.6)" stroke="#888"/>
      <text x="100" y="231" fill="#aaa" font-family="Arial" font-size="12">Email address</text>
      <rect x="400" y="205" width="120" height="42" rx="4" fill="#E50914"/>
      <text x="460" y="231" text-anchor="middle" fill="#fff" font-family="Arial" font-size="13" font-weight="bold">Get Started ›</text>
    </svg>`)
  },

  'Github-finder': {
    title: 'GitHub User & Repo Finder',
    description: 'An interactive GitHub profile explorer application built using GitHub REST API. Allows users to search for any GitHub developer, view real-time follower/following counts, profile bio, public repos, and live stats with clean cards.',
    techStack: ['JavaScript', 'GitHub API', 'CSS3', 'HTML5', 'REST API'],
    liveUrl: '',
    image: 'data:image/svg+xml;utf8,' + encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" width="600" height="300">
      <defs>
        <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#0d1117"/><stop offset="100%" stop-color="#161b22"/></linearGradient>
      </defs>
      <rect width="600" height="300" fill="url(#bg)"/>
      <text x="30" y="40" fill="#58a6ff" font-family="Arial" font-size="20" font-weight="bold">🔍 GitHub Finder</text>
      <rect x="30" y="60" width="540" height="42" rx="8" fill="#21262d" stroke="#30363d"/>
      <text x="50" y="86" fill="#8b949e" font-family="Arial" font-size="13">Search GitHub username (e.g. Yash-Panchal1)...</text>
      <rect x="30" y="120" width="540" height="150" rx="10" fill="#161b22" stroke="#30363d"/>
      <circle cx="85" cy="180" r="35" fill="#30363d"/>
      <text x="85" y="188" text-anchor="middle" fill="#c9d1d9" font-family="Arial" font-size="26">YP</text>
      <text x="140" y="160" fill="#c9d1d9" font-family="Arial" font-size="18" font-weight="bold">Yash Panchal</text>
      <text x="140" y="182" fill="#58a6ff" font-family="Arial" font-size="12">@Yash-Panchal1 • MERN Stack Developer</text>
      <rect x="140" y="200" width="100" height="32" rx="6" fill="#21262d"/>
      <text x="190" y="220" text-anchor="middle" fill="#8b949e" font-family="Arial" font-size="11">Repos: <tspan fill="#58a6ff" font-weight="bold">5</tspan></text>
      <rect x="250" y="200" width="100" height="32" rx="6" fill="#21262d"/>
      <text x="300" y="220" text-anchor="middle" fill="#8b949e" font-family="Arial" font-size="11">Followers: <tspan fill="#3fb950" font-weight="bold">Active</tspan></text>
    </svg>`)
  },

  'Keyboard-Checker': {
    title: 'Keyboard Key Checker',
    description: 'A responsive developer utility tool to test and inspect keyboard event inputs. Instantly displays keyCode, event.key, event.code, and ASCII numbers with live visual key animation upon press.',
    techStack: ['JavaScript', 'DOM Events', 'HTML5', 'CSS3'],
    liveUrl: '',
    image: 'data:image/svg+xml;utf8,' + encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" width="600" height="300">
      <defs>
        <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#181824"/><stop offset="100%" stop-color="#221e36"/></linearGradient>
      </defs>
      <rect width="600" height="300" fill="url(#bg)"/>
      <text x="300" y="45" text-anchor="middle" fill="#ff79c6" font-family="Arial" font-size="20" font-weight="bold">⌨️ Keyboard Key Checker</text>
      <text x="300" y="75" text-anchor="middle" fill="#6272a4" font-family="Arial" font-size="12">Press any key on your keyboard to get the key code info</text>
      <rect x="45" y="105" width="150" height="140" rx="12" fill="#282a36" stroke="#44475a" stroke-width="2"/>
      <text x="120" y="140" text-anchor="middle" fill="#bd93f9" font-family="Arial" font-size="13" font-weight="bold">e.key</text>
      <text x="120" y="190" text-anchor="middle" fill="#50fa7b" font-family="Arial" font-size="32" font-weight="bold">Space</text>
      <rect x="225" y="105" width="150" height="140" rx="12" fill="#282a36" stroke="#ff79c6" stroke-width="2"/>
      <text x="300" y="140" text-anchor="middle" fill="#bd93f9" font-family="Arial" font-size="13" font-weight="bold">e.keyCode</text>
      <text x="300" y="190" text-anchor="middle" fill="#ff79c6" font-family="Arial" font-size="44" font-weight="bold">32</text>
      <rect x="405" y="105" width="150" height="140" rx="12" fill="#282a36" stroke="#44475a" stroke-width="2"/>
      <text x="480" y="140" text-anchor="middle" fill="#bd93f9" font-family="Arial" font-size="13" font-weight="bold">e.code</text>
      <text x="480" y="190" text-anchor="middle" fill="#8be9fd" font-family="Arial" font-size="22" font-weight="bold">Space</text>
    </svg>`)
  }
}
