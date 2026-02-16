import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'

export default function TimeCard() {
  const [time, setTime] = useState('')
  const cardRef = useRef(null)
  const timeTextRef = useRef(null)

  // 日本時間をリアルタイム更新
  useEffect(() => {
    const updateTime = () => {
      const jstTime = new Date().toLocaleString('ja-JP', {
        timeZone: 'Asia/Tokyo',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
      })
      setTime(jstTime)
    }

    updateTime()
    const interval = setInterval(updateTime, 1000)
    return () => clearInterval(interval)
  }, [])

  // 時間が変わった時にアニメーション
  useEffect(() => {
    if (time && timeTextRef.current) {
      gsap.fromTo(
        timeTextRef.current,
        { opacity: 0.5, scale: 0.95 },
        { opacity: 1, scale: 1, duration: 0.3, ease: 'power2.out' }
      )
    }
  }, [time])



  return (
    <div ref={cardRef} className="timeCardWrapper bento-card card-time">
      <div className="timeCardContent">
        <div ref={timeTextRef} className="timeCardDisplay">
          {time || '--:--:--'}
        </div>
        <p className="timeCardLabel">JAPAN TIME</p>
      </div>
    </div>
  )
}