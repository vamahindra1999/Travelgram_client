import React from "react";
import "../App.css";
import { Button } from "./Button";
import "./css/main.css";

function HeroSection() {
  return (
    <div className="hero-container">
      <h1>Travelgram</h1>
      <p>What are you waiting for?</p>
      <div className="hero-btns">
        <button
          className="btn btn--outline shadow-none"
          onClick={()=>{
            window.scrollTo({top:760,behavior:"smooth"})
          }}
        >
          Explore
        </button>
      </div>
    </div>
  );
}

export default HeroSection;
