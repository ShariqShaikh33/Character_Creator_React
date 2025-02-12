import React from "react";
import SpriteSheet from "../assets/Character_SpriteSheet_v1.svg";
import "../styles/App.css";

const App=()=>{
  let h="1280px";
  let w="1280px";

  return(
    <>
      <div className="frame0">
        <img src={SpriteSheet} className="body1" height={h} width={w}   alt="body"></img>
      </div>
      <div className="frame1">
        <img src={SpriteSheet} className="hairdarkgray" height={h} width={w}  alt="hair"></img>
      </div>
      <div className="frame2">
        <img src={SpriteSheet} className="eyesgreen" height={h} width={w}  alt="eyes"></img>
      </div>
      
      <div className="frame3">
        <img src={SpriteSheet} className="shirtblack" height={h} width={w}  alt="shirt"></img>
      </div>
      <div className="frame3">
        <img src={SpriteSheet} className="pantred" height={h} width={w}  alt="shirt"></img>
      </div>
      <div className="frame4">
        <img src={SpriteSheet} className="jacketred" height={h} width={w}  alt="shirt"></img>
      </div>
      <div className="frame4">
        <img src={SpriteSheet} className="weaponsword" height={h} width={w}  alt="shirt"></img>
      </div>
    </>
  )
}

export default App;