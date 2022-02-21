import React from 'react'
import './Slider.css'
import {useInView} from "react-intersection-observer";

function Slider({imageSrc, title, subtitle, flip})
{
    const {ref,inView} = useInView({
        threshold: 0.4,
    });



function renderContent(){
    if(flip)
    {
        return(
            <div className="Slider Slider--zoom">
                <img src={imageSrc} alt="slika2" className="Slider__image"/>
                <div className="Slider__content">
                    <h1 className="Slider__title">{title}</h1>
                    <p>{subtitle}</p>
                </div>
            </div>
        )
    }
    else
    {
        return(
            <div className="Slider Slider--zoom">
                <div className="Slider__content">
                    <h1 className="Slider__title">{title}</h1>
                    <p>{subtitle}</p>
                </div>
                <img src={imageSrc} alt="slika2" className="Slider__image"/>
            </div>
        )
    }
}
  return (
    <div className={inView ? "Slider--zoom" : "Slider"} ref={ref}>
        {renderContent()}
    </div>
  );
}

export default Slider