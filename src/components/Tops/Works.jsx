function Works({activeTab,setActiveTab,theme,setTheme}){
    return(
        <div className={`tab-content ${activeTab === 'works' ? 'active' : ''}`}>
          <div className="works-content">
            <h1>My Works</h1>
            <p>制作物がここに入ります</p>
          </div>
        </div>
    )
}
export default Works