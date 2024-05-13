import React from "react";
import "./Hero.css";
import Header from "../Header/Header";
import hero_image from "../../assets/hero_image.png"
import hero_image_back from "../../assets/hero_image_back.png"
import Heart from "../../assets/heart.png"
import Calories from "../../assets/calories.png"

const Hero = () => {
  return (
    <div className="hero">
      <div className="left-h">
        {/*Header*/}
        <Header />
        {/*The best ad*/}
        <div className="the-best-ad">
          <div></div>
          <span>the best fitness club in the pown</span>
        </div>
        {/*Hero Heading*/}
        <div className="hero-text">
          <div>
            <span className="stroke-text">Shape</span>
            <span>Your</span>
          </div>
          <div>
            <span>Ideal body</span>
          </div>
          <div>
            <span>
              in here we will help you to and build your ideas live up your life
              to fullest
            </span>
          </div>
        </div>
        {/*Figures*/}
        <div className="figures">
          <div>
            <span>+140</span>
            <span>expert coaches</span>
          </div>
          <div>
            <span>+978</span>
            <span>members joined</span>
          </div>
          <div>
            <span>+50</span>
            <span>fitness programs</span>
          </div>
        </div>

        <div className="hero-buttons">
          <button className="btn">Get Started</button>
          <button className="btn">Learn More</button>
        </div>
      </div>
      <div className="right-h">
        <button className="btn">Join Now</button>

        <div className="heart-rate">
          {/*HERO IMAGES*/}
          <img src={hero_image} alt="" className="hero-image"/> <span>Heart Rate</span><span>116 bpm</span>
          <img src={hero_image_back} alt="" className="hero-image-back"/>
        </div>
      </div>
    </div>
  );
};

export default Hero;
