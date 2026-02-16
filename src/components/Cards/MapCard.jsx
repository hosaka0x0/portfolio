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
  console.log('MapCard useEffect開始')
  console.log('mapContainer.current:', mapContainer.current)
  console.log('map.current:', map.current)
  
  if (map.current) {
    console.log('既に初期化済み - スキップ')
    return
  }

  console.log('✅ Mapbox初期化開始')
  console.log('Access Token:', import.meta.env.VITE_MAPBOX_ACCESS_TOKEN ? 'あり' : 'なし')
  
  mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_ACCESS_TOKEN

  const selectedStyle = getStyleByTime()
  console.log('選択されたスタイル:', selectedStyle)

  map.current = new mapboxgl.Map({
    container: mapContainer.current,
    style: selectedStyle,
    center: [139.74633, 35.661581],
    zoom: 14.5,
    pitch: 70,
    interactive: false
  })
  
  console.log('✅ Map作成完了:', map.current)

  return () => {
    console.log('クリーンアップ実行')
    if (map.current) {
      map.current.remove()
      map.current = null
    }
  }
}, [])

  return (
  <div className="bento-card card-map" style={{ padding: 0, overflow: 'hidden' }}>
    <div ref={mapContainer} style={{ width: '100%', height: '100%' }} />
  </div>
)
}

export default MapCard