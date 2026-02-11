import { useState } from "react"
import Sidebar from "./components/Sidebar.jsx"
import Top from "./components/Top.jsx"

function App() {
  const [activeTab, setActiveTab] = useState('hello')
  const [theme, setTheme] = useState('light')
  
  return (
    <>
      {
    <div className="portfolio-container">
      {/* 左側サイドバー */}
      <Sidebar 
        activeTab={activeTab} 
        setActiveTab={setActiveTab}
        theme={theme}
        setTheme={setTheme}
      />


      {/* メインコンテンツエリア */}
      <Top
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        theme={theme}
        setTheme={setTheme}
      />
    </div>

  }
    </>
  )
}
export default App
