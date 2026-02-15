import { useState, useEffect } from "react";
import gsap from "gsap";
import SplitText from "gsap/SplitText";

gsap.registerPlugin(SplitText);

function NameCard(){
    const [isLargeScreen, setIsLargeScreen] = useState(false);
    
    // スクリーン判定
    useEffect(() => {
        const handleResize = () => {
            const width = window.innerWidth;
            setIsLargeScreen(width>=1200);  // ← 1200px以上の条件を書く
        };
        
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // GSAP
    useEffect(() => {
    let split = SplitText.create(".name-card-text", {
        type:"chars,words,lines"
    });

    const tl = gsap.timeline({ repeat: -1 }); 
    tl.from(split.chars, {
        x: 150,
        opacity: 0,
        duration: 0.7,
        ease: "power4",
        stagger: 0.2
    })
    .to({}, { duration: 0.8 })
    .to(split.chars, {
        x: -150,
        opacity: 0,
        duration: 0.6,
        ease: "power2",
        stagger: 0.06
    });

    return () => {
        split && split.revert();
        tl && tl.kill();
    };
    }, [isLargeScreen]); 

    // テキスト分岐
    const content = isLargeScreen ? (
        <h2 className="name-card-text">Sakamoto<br/>Honoka</h2>
    ) : (
        <h2 className="name-card-text">Sakamoto Honoka</h2>
    );

    return(
        <div className="bento-card">
            {content}
        </div>
    )
}

export default NameCard