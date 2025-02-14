import React from "react";
import SpriteSheet from "../assets/Character_SpriteSheet_v1.svg";
import "../styles/App.css";

const Character =({characterState})=>{
    console.log(characterState);
    return(
        <div>
            <div className="frame0">
            <img src={SpriteSheet} className={characterState.body} height={characterState.h} width={characterState.w}   alt="body"></img>
            </div>
            <div className="frame1">
            <img src={SpriteSheet} className={characterState.hair} height={characterState.h} width={characterState.w}  alt="hair"></img>
            </div>
            <div className="frame1">
            <img src={SpriteSheet} className={characterState.eyes} height={characterState.h} width={characterState.w}  alt="eyes"></img>
            </div>
            <div className="frame1">
            <img src={SpriteSheet} className={characterState.weapon} height={characterState.h} width={characterState.w}  alt="weapon"></img>
            </div>
            <div className="frame1">
            <img src={SpriteSheet} className={characterState.shirt} height={characterState.h} width={characterState.w}  alt="shirt"></img>
            </div>
            <div className="frame2">
            <img src={SpriteSheet} className={characterState.jacket} height={characterState.h} width={characterState.w}  alt="jacket"></img>
            </div>
            <div className="frame1">
            <img src={SpriteSheet} className={characterState.pant} height={characterState.h} width={characterState.w}  alt="pant"></img>
            </div>
            <div className="frame1">
            <img src={SpriteSheet} className={characterState.shoes} height={characterState.h} width={characterState.w}  alt="shoes"></img>
            </div>
        </div>
    )
}

export default Character;