import { useEffect } from 'react'
import './WelcomeScreen.css'

export default function WelcomeScreen({ onDone }) {
  useEffect(() => {
    const timer = setTimeout(onDone, 1000)
    return () => clearTimeout(timer)
  }, [onDone])

  return (
    <div
      className="welcome-screen"
      onClick={onDone}
      style={{ cursor: 'pointer' }}
      title="Click to continue to desktop"
    >
      <p className="welcome-text">welcome</p>
    </div>
  )
}
