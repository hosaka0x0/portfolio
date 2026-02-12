import { useEffect, useState } from "react"
import { createClient } from "microcms-js-sdk"

function Works({activeTab,setActiveTab,theme,setTheme}){
    const [works,setWorks]= useState([]);
    useEffect(()=>{
        async function fetchWorksData() {
        const client =createClient({
            serviceDomain:import.meta.env.VITE_MICROCMS_SERVICE_DOMAIN,
            apiKey:import.meta.env.VITE_MICROCMS_API_KEY,
        })
        const response = await client.getList({ endpoint:'works'});
        console.log('取得したデータ:', response);
        console.log('contentsの中身:', response.contents);
        setWorks(response.contents);
        }
        fetchWorksData()
    },[])

    return(
        <div className={`tab-content ${activeTab === 'works' ? 'active' : ''}`}>
          <div className="works-content">
            <h1>My Works</h1>
          </div>
          <div className="works-grid">
            {works.map((work)=>(
            <div key={work.id} className="work-item">
                <div className="work-text">
                    <div className="work-title">
                        {work.works_title}
                    </div>
                    <div className="work-discription">
                        {work.works_genre[0]}
                    </div>
                </div>
            <img src={work.works_img.url} className="work-img"/>
            </div>
          ))}
          </div>
        </div>
    )
}
export default Works