import { useEffect, useRef } from 'react'

function MapCard() {
  const mapContainer = useRef(null)
  const map = useRef(null)

  const getStyleByTime = () => {
    const hour = new Date().getHours()
    if (hour >= 0 && hour < 6) return 'mapbox://styles/tankermm/cmlp13q5m006c01sw6q687lx2'
    if (hour >= 6 && hour < 12) return 'mapbox://styles/tankermm/cmlp05de3000o01su118e22u6'
    if (hour >= 12 && hour < 18) return 'mapbox://styles/tankermm/cmlp0zrmu009x01sk82uo4itd'
    return 'mapbox://styles/tankermm/cmlp0geyf004301sr3ngh13l6'
  }

  useEffect(() => {
    if (map.current) return

    mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_ACCESS_TOKEN

    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: getStyleByTime(),
      center: [139.74633, 35.661581],
      zoom: 14.5,
      pitch: 70,
      interactive: false
    })

    // ↓ 追加
    map.current.on('load', () => {
      map.current.resize()
    })

    return () => {
      if (map.current) {
        map.current.remove()
        map.current = null
      }
    }
  }, [])

useEffect(() => {
    if (!mapContainer.current) return

    const observer = new ResizeObserver(() => {
      requestAnimationFrame(() => {        
        if (map.current) map.current.resize()
      })                                   
    })

    observer.observe(mapContainer.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div className="bento-card card-map" style={{ padding: 0, overflow: 'hidden', position: 'relative' }}>
    <div ref={mapContainer} style={{ width: '100%', height: '100%' }} />
    </div>
  )
}

export default MapCard