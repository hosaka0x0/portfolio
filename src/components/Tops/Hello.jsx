import IconCard from "../Cards/IconCard.jsx"
import NameCard from "../Cards/NameCard.jsx"
import JobCard from "../Cards/JobCard.jsx"
import SNSCard from "../Cards/SNSCard.jsx"

function Hello({activeTab,setActiveTab,theme,setTheme}){

    return(
        <div className={`tab-content ${activeTab === 'hello' ? 'active' : ''}`}>
          <div className="hello-content">
            <div className="hello-main">
              <div className="bento-grid">
                <div className="bento-card card-icon"><IconCard/></div>
                <div className="bento-card card-works">Works</div>
                
                <div className="bento-card card-sns">SNS 1</div>
                <div className="bento-card card-sns">SNS 2</div>
                <div className="bento-card card-sns">SNS 3</div>
                <div className="bento-card card-sns">SNS 4</div>

                <div className="bento-card card-profile">Profile (2x1)</div>
                <div className="bento-card card-diary">日記 (2x3)</div>
                <div className="bento-card card-map">Map (4x2)</div>
                <div className="bento-card card-about">About (2x2)</div>
                
                <div className="bento-card card-time">Time (1x2)</div>
                <div className="bento-card card-region">地域 (1x2)</div>
              </div>
            </div>
          </div>
        </div>
    )
}
export default Hello