import React, { useEffect, useState } from "react";
import "../styles/App.css";
import Character from "./Character";
import Settings from "./Settings";

const App=()=>{
  const [characterState, setCharacterState] = useState({
    h : "1280px", w : "1280px", body : "body1", hair: "hairdarkgray", eyes : "eyesgreen", weapon : "weapon3", shirt : "shirtblack", jacket : "jacketred", pant : "pantred", shoes : "shoesblack"});
    
  const update=(data)=>{
    setCharacterState(data);
  }
    return(
    <div className="App">
      <Character characterState={characterState}/>
      <Settings characterState={characterState} update={update}/>
    </div>
  )
}

export default App;