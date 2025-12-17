import React, { useState, useEffect } from 'react'

function videoanimation({videos}) {

    

    const [ind, setInd] = useState(0);
    const [fade, setFade] = useState(true);
    useEffect(() => {
        const interval2 = setInterval(() => {
            setFade(false); // fade out
            setInd((prev) => (prev + 1) % videos.length);
        }, 6000); // video duration

        return () => { clearInterval(interval2) }
    })
    return (
        <div className="absolute top-0 left-0 w-full -z-10 h-full overflow-hidden">

            {/* Video Layer */}
            <video
                key={ind}
                src={videos[ind]}
                autoPlay
                loop
                muted
                playsInline
                className={`
          absolute inset-0 w-full h-full object-cover object-top
          transition-opacity 
        `}
            />
        </div>
    )
}

export default videoanimation