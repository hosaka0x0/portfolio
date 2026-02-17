import IconCard from "../Cards/IconCard.jsx"
import { useEffect } from 'react'
import NameCard from "../Cards/NameCard.jsx"
import JobCard from "../Cards/JobCard.jsx"
import SNSCard from "../Cards/SNSCard.jsx"
import MapCard from "../Cards/MapCard.jsx"
import TimeCard from "../Cards/TimeCard.jsx"
import gsap from "gsap"
import CityCard from "../Cards/CityCard.jsx"
import WorksCard from "../Cards/WorksCard.jsx"


function Hello({activeTab,setActiveTab,theme,setTheme}){
    useEffect(() => {
    // 全bentoカードに登場アニメーション
    const cards = document.querySelectorAll('.bento-card')
    
    gsap.fromTo(
      cards,
      { opacity: 0, y: 20 },
      { 
        opacity: 1, 
        y: 0, 
        duration: 0.8, 
        ease: 'power3.out',
        stagger: 0.1  // 0.1秒間隔で順番に出現
      }
    )
  }, [])

    return(
        <div className={`tab-content ${activeTab === 'hello' ? 'active' : ''}`}>
          <div className="hello-content">
            <div className="hello-main">
              <div className="bento-grid">
                <IconCard/>
                <WorksCard/>
                <div className="bento-card card-sns">SNS 1</div>
                <div className="bento-card card-sns">SNS 2</div>
                <div className="bento-card card-sns">SNS 3</div>
                <div className="bento-card card-sns">SNS 4</div>

                <NameCard/>

                <div className="bento-card card-diary">日記 (2x3)</div>
                <MapCard/>
                <div className="bento-card card-about">About (2x2)</div>
                
                <TimeCard/>
                <CityCard/>
              </div>
            </div>
          </div>
        </div>
    )
}
export default Hello