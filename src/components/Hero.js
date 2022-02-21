import React from 'react';
import "./Hero.css";

function Hero({imageSrc}) {
  return (
    <div className="hero">
        <img src = {imageSrc} alt="plaza1" className="hero__image"/>
        <h1 className="hero__title">Lorem Ipsum</h1>
    </div>
  );
}

export default Hero