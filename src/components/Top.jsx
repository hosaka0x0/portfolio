import Hello from "./Tops/Hello.jsx"
import About from "./Tops/About.jsx"
import Works from "./Tops/Works.jsx"
function Top({activeTab,setActiveTab,theme,setTheme}) {
    return(
        <main className="content-area">
        {/* Hello タブコンテンツ */}
        <Hello
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            theme={theme}
            setTheme={setTheme}
        />

        {/* About タブコンテンツ */}
        <About 
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            theme={theme}
            setTheme={setTheme}
        />

        {/* Works タブコンテンツ */}
        <Works 
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            theme={theme}
            setTheme={setTheme}
        />
      </main>
    )
}
export default Top