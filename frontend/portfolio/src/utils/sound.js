// Pre-cached audio pool for zero-delay instant response
let audioPool = []
let poolIndex = 0

let logoffAudio = null
let audioCtx = null
let logoffBuffer = null

if (typeof window !== 'undefined') {
  // Preload click sound pool
  for (let i = 0; i < 4; i++) {
    const a = new Audio('/assets/audio/click.mp3')
    a.volume = 0.4
    a.preload = 'auto'
    audioPool.push(a)
  }

  // Pre-load HTML5 Audio instance for instant fallback
  logoffAudio = new Audio('/assets/audio/logoff.mp3')
  logoffAudio.volume = 0.6
  logoffAudio.preload = 'auto'
  logoffAudio.load()

  // Pre-fetch & pre-decode into Web Audio API for true zero-latency 0ms playback
  try {
    const AudioContextClass = window.AudioContext || window.webkitAudioContext
    if (AudioContextClass) {
      audioCtx = new AudioContextClass()
      fetch('/assets/audio/logoff.mp3')
        .then((res) => res.arrayBuffer())
        .then((data) => audioCtx.decodeAudioData(data))
        .then((decoded) => {
          logoffBuffer = decoded
        })
        .catch(() => {})
    }
  } catch {
    // ignore
  }
}

export function playClick() {
  try {
    if (audioPool.length > 0) {
      const audio = audioPool[poolIndex]
      audio.currentTime = 0
      audio.play().catch(() => {})
      poolIndex = (poolIndex + 1) % audioPool.length
    }
  } catch {
    // ignore playback restrictions
  }
}

export function playLogoff() {
  try {
    // 1. Instant zero-latency Web Audio API playback from pre-decoded RAM buffer
    if (audioCtx && logoffBuffer) {
      if (audioCtx.state === 'suspended') {
        audioCtx.resume().catch(() => {})
      }
      const source = audioCtx.createBufferSource()
      source.buffer = logoffBuffer
      const gain = audioCtx.createGain()
      gain.gain.value = 0.6
      source.connect(gain)
      gain.connect(audioCtx.destination)
      source.start(0)
      return
    }

    // 2. Instant fallback from pre-cached HTML5 Audio instance
    if (logoffAudio) {
      logoffAudio.currentTime = 0
      logoffAudio.play().catch(() => {})
      return
    }

    // 3. Fallback
    const audio = new Audio('/assets/audio/logoff.mp3')
    audio.volume = 0.6
    audio.play().catch(() => {})
  } catch {
    // ignore playback restrictions
  }
}
