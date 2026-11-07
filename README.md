# 🪟 Yash Panchal - Windows XP Portfolio

A full-stack, responsive, interactive portfolio website inspired by the iconic **Windows XP** operating system. Built with modern web technologies, authentic retro aesthetics, full touch/mobile responsiveness, and deployed to cloud infrastructure.

🌐 **Live Demo:** [https://yash-xp.vercel.app](https://yash-xp.vercel.app)  
⚙️ **Backend API:** [https://portfolio-7isj.onrender.com](https://portfolio-7isj.onrender.com)

---

## 🛠️ Complete Tech Stack & Tools

### **1. Frontend & Client-Side**
| Technology | Category | Purpose / Role |
| :--- | :--- | :--- |
| **React.js 19** | JavaScript Library | Component-based UI architecture, window state management, and virtual DOM rendering. |
| **Vite** | Build Tool / Bundler | Fast development server, Hot Module Replacement (HMR), and tree-shaken production asset packaging. |
| **JavaScript (ES6+)** | Programming Language | Core client-side application logic, event listeners, and asynchronous fetching. |
| **CSS3 & GFM** | Styling & UI | Custom Windows XP Luna blue theme, linear gradients, classic bevels, drop-shadows, animations, and transitions. |
| **Responsive Grid & Flexbox** | Layout Engine | Mobile adaptation, desktop icon grid auto-flow, and full-screen window views. |
| **Web Audio API** | Browser Audio Engine | Cyclic preloaded audio pool for zero-latency interactive click and authentic Windows XP startup sounds. |
| **HTML5 Canvas / SVG** | Graphics | Vector-based icons, UI elements, and custom social-preview thumbnail banners for project repositories. |
| **GitHub REST API** | External Integration | Real-time fetching of repositories, languages, stargazers count, and live update synchronization. |

---

### **2. Backend & Server-Side**
| Technology | Category | Purpose / Role |
| :--- | :--- | :--- |
| **Node.js** | Runtime Environment | High-performance, asynchronous non-blocking I/O event-driven backend runtime. |
| **Express.js** | Web Framework | REST API routing, request validation, error handling middleware, and payload limits. |
| **MongoDB Atlas** | Cloud Database | Scalable cloud-hosted NoSQL document database for persisting contact form submissions. |
| **Mongoose** | ODM (Object Data Modeling) | Schema validation, type-safe data modeling, and query execution for messages. |
| **Resend SDK** | Transactional Mail Service | Enterprise HTTPS API (Port 443) mailer providing instant, spam-free message forwarding directly to Gmail. |
| **Nodemailer** | Mail Transport Engine | SMTP protocol configuration, DNS IPv4 resolution priority, and mail fallback capabilities. |
| **Express Rate Limit** | Security Middleware | IP-based rate limiting protecting public endpoints against automated bot spam and abuse. |
| **CORS** | Security Middleware | Cross-Origin Resource Sharing control facilitating secure API requests between Vercel and Render. |
| **Dotenv** | Configuration Management | Secure environment variable injection across local and cloud environments. |

---

### **3. Cloud Infrastructure & DevOps**
| Service | Platform Type | Functionality |
| :--- | :--- | :--- |
| **Vercel** | Edge Network / Static Cloud | Global Edge CDN hosting for the React frontend, automatic git-based continuous integration and deployment (CI/CD). |
| **Render** | Cloud Application Platform | Containerized background service hosting the Node.js/Express REST API. |
| **MongoDB Atlas** | Database-as-a-Service (DBaaS) | 24/7 cloud MongoDB cluster with replica sets, automated backups, and connection pooling. |
| **Git & GitHub** | Version Control & Source Control | Multi-folder monorepo tracking, branch management, and automated webhooks. |

---

### **4. Developer Tools & Assets**
- **VS Code**: Primary development environment with ESLint and Prettier integration.
- **Postman**: REST API testing, header verification, and route debugging.
- **Authentic Windows XP Assets**: Icons extracted from original Windows XP source files (`shell32.dll`, `explorer.exe`).
- **Space Cadet Pinball**: Embedded web assembly iframe running the original 3D Pinball table with keyboard controls and sound.

---

## ✨ Features & User Experience

- **🖥️ Desktop & OS Emulation**:
  - **Boot Loader Screen**: Authentic XP progress bar and rapid skip option.
  - **User Login**: Multi-user XP welcome screen featuring custom avatar and system restart capabilities.
  - **Desktop Environment**: Classic Bliss wallpaper with engraved "YASH" hillside art, draggable windows, and active state management.
  - **Start Menu**: All Programs list, Log Off dialogue, and quick shortcuts.
  - **Taskbar & System Tray**: Real-time clock, minimized window restoration, and notification bubble.
  - **View Controls**: Interactive `View` dropdown menu offering full window maximize, restore, and taskbar minimize actions.

- **🚀 My Projects Browser**:
  - Modeled after Internet Explorer 6 with working Address bar and navigation controls.
  - Dynamically fetches Yash's public GitHub repositories.
  - High-resolution SVG preview banners for ChatApp, Todo App, Netflix Clone, GitHub Finder, and Keyboard Checker.
  - In-window project inspection view with direct links to Live Demos and source code.

- **📬 Contact Me (Outlook Express)**:
  - Faithful reproduction of the classic Outlook Express email composer.
  - Dual-action submission: Saves inquiry to MongoDB and instantly triggers a formatted email alert via Resend to Yash's personal inbox.

- **📱 Full Mobile Responsiveness**:
  - Single-tap desktop icon launching on touchscreen devices.
  - Auto-maximizing full-screen windows for phones and tablets.
  - Touch-friendly adaptive Start Menu and mobile-proportioned taskbar.

---

## 📁 Directory Architecture

```text
Portfolio/
├── backend/
│   ├── src/
│   │   ├── controllers/      # Message and project business logic
│   │   ├── db/               # MongoDB Atlas connection handler
│   │   ├── middlewares/      # Security, admin auth, and error handling
│   │   ├── models/           # Mongoose schemas (Message, Project)
│   │   ├── routes/           # REST endpoints (/api/contact, /api/projects)
│   │   ├── utils/            # Resend mailer, ApiError, and ApiResponse helpers
│   │   ├── app.js            # Express application configuration
│   │   └── server.js         # HTTP server entry point
│   ├── package.json
│   └── .env                  # Server environment configuration
│
├── frontend/
│   └── portfolio/
│       ├── public/           # Static assets, wallpapers, avatars, sounds, and icons
│       ├── src/
│       │   ├── components/   # Taskbar, DesktopIcon, StartMenu, ContextMenu, LogOffDialog
│       │   ├── data/         # Repository preview banners and tech stack metadata
│       │   ├── screens/      # BootScreen, LoginScreen, DesktopScreen, WelcomeScreen
│       │   ├── utils/        # Preloaded Web Audio sound manager
│       │   ├── windows/      # AboutWindow, ProjectsWindow, ResumeWindow, ContactWindow, PinballWindow
│       │   ├── App.jsx       # Root screen router & global interaction handler
│       │   └── main.jsx      # React DOM client bootstrap
│       ├── vite.config.js
│       └── package.json
│
├── .gitignore
└── README.md
```

---

## 🚀 Getting Started Locally

### Prerequisites
- [Node.js](https://nodejs.org/) (v18 or higher)
- [Git](https://git-scm.com/)
- A free [MongoDB Atlas](https://www.mongodb.com/atlas) cluster
- A free [Resend](https://resend.com) API Key (for contact emails)

### 1. Clone the repository
```bash
git clone https://github.com/Yash-Panchal1/Portfolio.git
cd Portfolio
```

### 2. Configure & Run Backend
```bash
cd backend
npm install
```
Create a `.env` file inside `backend/`:
```env
PORT=8000
MONGODB_URI=your_mongodb_connection_string
RESEND_API_KEY=your_resend_api_key
EMAIL_USER=yk6255713@gmail.com
ADMIN_API_KEY=your_admin_secret_key
FRONTEND_URL=http://localhost:5173
```
Start the development backend:
```bash
npm run dev
```

### 3. Configure & Run Frontend
```bash
cd ../frontend/portfolio
npm install
```
Start the Vite development server:
```bash
npm run dev
```
Navigate to **`http://localhost:5173`** to explore the portfolio!

---

## 👨‍💻 Author

**Yash Panchal**  
*MERN Stack Developer*  
- **Portfolio:** [yash-xp.vercel.app](https://yash-xp.vercel.app)  
- **GitHub:** [@Yash-Panchal1](https://github.com/Yash-Panchal1)  
- **LinkedIn:** [Yash Panchal](https://www.linkedin.com/in/yash-panchal-92948725a/)  
- **Email:** [yk6255713@gmail.com](mailto:yk6255713@gmail.com)
