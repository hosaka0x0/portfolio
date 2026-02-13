import IconCard from "../Cards/IconCard.jsx"
function Hello({activeTab,setActiveTab,theme,setTheme}){
    return(
        <div className={`tab-content ${activeTab === 'hello' ? 'active' : ''}`}>
          <div className="hello-content">
            <div className="hello-main">
              <div className="bento-grid">
                <IconCard/>
              </div>
            </div>
          </div>
        </div>
    )
}
export default Hello