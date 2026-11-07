import { useState, useEffect } from 'react'
import BootScreen from './screens/BootScreen'
import LoginScreen from './screens/LoginScreen'
import WelcomeScreen from './screens/WelcomeScreen'
import DesktopScreen from './screens/DesktopScreen'
import { playClick } from './utils/sound'
import './App.css'

// Screens: boot -> login -> welcome -> desktop
export default function App() {
  const [screen, setScreen] = useState('boot')

  useEffect(() => {
    const handleGlobalClick = (e) => {
      // Trigger click sound when clicking buttons, links, or role="button" elements
      const target = e.target.closest('button, a, [role="button"], input[type="submit"], input[type="button"], .desktop-icon, .start-menu-item, .login-user-card')
      if (target) {
        playClick()
      }
    }

    document.addEventListener('click', handleGlobalClick, true)
    return () => {
      document.removeEventListener('click', handleGlobalClick, true)
    }
  }, [])

  return (
    <div className="app-root">
      {screen === 'boot'    && <BootScreen    onDone={() => setScreen('login')} />}
      {screen === 'login'   && <LoginScreen   onLogin={() => setScreen('welcome')} />}
      {screen === 'welcome' && <WelcomeScreen onDone={() => setScreen('desktop')} />}
      {screen === 'desktop' && <DesktopScreen onLogOff={() => setScreen('login')} />}
    </div>
  )
}
