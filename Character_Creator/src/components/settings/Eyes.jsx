import React from "react";

const Eyes=({characterState, previous, next})=>{
    let arr = ["eyesblack", "eyesdarkgray", "eyesbrown", "eyesgreen", "eyesblue", "eyeslightgray"];
    let property = characterState.eyes;

    let index= 0;
    for(let i=0;i<arr.length;i++){
        if(property==arr[i]){
            index=i;
        }
    }   

    return (
        <div className="btns">
            <div className="btndiv">
                <button onClick={()=>previous("eyes", index, arr)}>{"<"}</button>
                <div>{characterState.eyes}</div>
                <button onClick={()=>next("eyes", index, arr)}>{">"}</button>
            </div>
        </div>
    )
}

export default Eyes;
