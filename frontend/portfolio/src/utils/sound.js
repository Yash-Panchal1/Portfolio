// Pre-cached audio pool for zero-delay instant response
let audioPool = []
let poolIndex = 0

if (typeof window !== 'undefined') {
  for (let i = 0; i < 4; i++) {
    const a = new Audio('/assets/audio/click.mp3')
    a.volume = 0.4
    a.preload = 'auto'
    audioPool.push(a)
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
