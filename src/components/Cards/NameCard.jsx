import { useState, useEffect, useRef } from "react";
import gsap from "gsap";

function NameCard(){
    const [isLargeScreen, setIsLargeScreen] = useState(false);
    const [nameIndex, setNameIndex] = useState(0);
    const textRef = useRef(null);
    
    useEffect(() => {
        const handleResize = () => {
            setIsLargeScreen(window.innerWidth >= 1200);
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        if (!textRef.current) return
        const el = textRef.current

        gsap.fromTo(el, 
            { x: 150, opacity: 0 },
            { 
                x: 0, opacity: 1, duration: 0.7, ease: "power4",
                onComplete: () => {
                    gsap.to(el, {
                        x: -150, opacity: 0, duration: 0.6, ease: "power2", delay: 3,
                        onComplete: () => {
                            setNameIndex(prev => prev === 0 ? 1 : 0);
                        }
                    })
                }
            }
        )

        return () => { gsap.killTweensOf(el) }
    }, [nameIndex, isLargeScreen]);

    const texts = isLargeScreen
        ? [<>Sakamoto<br/>Honoka</>, "Tanker"]
        : ["Sakamoto Honoka", "Tanker"]

    return(
        <div className="bento-card card-profile">
            <h2 ref={textRef} className="name-card-text">
                {texts[nameIndex]}
            </h2>
        </div>
    )
}

export default NameCard