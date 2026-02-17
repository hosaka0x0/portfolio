import { useEffect, useState, useRef } from "react"
import { createClient } from "microcms-js-sdk"

function WorksTop() {
    const [works, setWorks] = useState([])
    const trackRef = useRef(null)

    useEffect(() => {
        async function fetchWorksData() {
            const client = createClient({
                serviceDomain: import.meta.env.VITE_MICROCMS_SERVICE_DOMAIN,
                apiKey: import.meta.env.VITE_MICROCMS_API_KEY,
            })
            const response = await client.getList({ endpoint: 'works' })
            setWorks(response.contents)
        }
        fetchWorksData()
    }, [])

    useEffect(() => {
        if (!trackRef.current || works.length === 0) return

        const track = trackRef.current
        const speedSeconds = 8
        let pos = 0
        let animationId

        const marqueeWidth = track.scrollWidth / 2

        function animate() {
            pos -= marqueeWidth / (speedSeconds * 60)
            if (pos <= -marqueeWidth) pos += marqueeWidth
            track.style.transform = `translateX(${pos}px)`
            animationId = requestAnimationFrame(animate)
        }

        animationId = requestAnimationFrame(animate)
        return () => cancelAnimationFrame(animationId)
    }, [works])

    return (
        <div className="bento-card card-works" style={{ padding: 0, overflow: 'hidden' }}>
            <div className="works-top-wrapper">
                <div ref={trackRef} className="works-top-track">
                    {works.length === 0 
                        ? [1,2,3].map(i => (
                            <div key={i} className="works-top-item works-top-skeleton" />
                        ))
                        : <>
                            {works.map((work) => (
                                <div key={work.id} className="works-top-item">
                                    <img src={`${work.works_img.url}?w=400&h=400&fit=crop`} alt={work.works_title} />
                                </div>
                            ))}
                            {works.map((work) => (
                                <div key={`${work.id}-clone`} className="works-top-item">
                                    <img src={`${work.works_img.url}?w=400&h=400&fit=crop`} alt={work.works_title} />
                                </div>
                            ))}
                        </>
                    }
                </div>
            </div>
        </div>
    )
}

export default WorksTop