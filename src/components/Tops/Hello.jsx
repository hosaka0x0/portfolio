import IconCard from "../Cards/IconCard.jsx"
import { useEffect } from 'react'
import NameCard from "../Cards/NameCard.jsx"
import XCard from "../Cards/XCard.jsx"
import NoteCard from "../Cards/NoteCard.jsx"
import LinkedinCard from "../Cards/LinkedinCard.jsx"
import InstaCard from "../Cards/InstaCard.jsx"
import MapCard from "../Cards/MapCard.jsx"
import TimeCard from "../Cards/TimeCard.jsx"
import gsap from "gsap"
import CityCard from "../Cards/CityCard.jsx"
import WorksCard from "../Cards/WorksCard.jsx"
import DiaryCard from "../Cards/DiaryCard.jsx"
import AboutCard from "../Cards/AboutCard.jsx"

function Hello({ activeTab, setActiveTab, theme, setTheme, client }) {

  useEffect(() => {
    const cards = document.querySelectorAll('.bento-card')
    gsap.fromTo(
      cards,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out', stagger: 0.1 }
    )
  }, [])

  return (
    <div className={`tab-content ${activeTab === 'hello' ? 'active' : ''}`}>
      <div className="hello-content">
        <div className="hello-main">
          <div className="bento-grid">
            <IconCard />
            <WorksCard />
            <XCard />
            <InstaCard />
            <NoteCard />
            <LinkedinCard />
            <NameCard />
            <DiaryCard client={client} setActiveTab={setActiveTab} />
            <MapCard />
            <AboutCard />
            <TimeCard />
            <CityCard />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hello