import React, { useEffect } from 'react';
import { useState } from 'react';
import './Scss/ScrollPercent.scss';

const ScrollPercent = () => {

    const [scrollValue, setScrollValue] = useState(0)

    useEffect(() => {
        document.addEventListener("scroll", () => {
            let pos = document.documentElement.scrollTop
            let calcHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight
            setScrollValue(Math.round((pos * 100)/calcHeight))
        })
    }, [])

    function scrollToTop(){
        document.documentElement.scrollTop = 0
    }

    return (
        <div onClick={() => scrollToTop()} className={`ScrollPercent ${scrollValue == 0 && "bottom"}`} style={{background: `conic-gradient(white ${scrollValue}%, #3F2328 ${scrollValue}%)`}}>
            <i className="fa fa-angle-up"></i>
        </div>
    );
};

export default ScrollPercent;