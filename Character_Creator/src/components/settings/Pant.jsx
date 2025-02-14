import React from "react";

const Pant=({characterState, previous, next})=>{
    let arr = ["pantblack", "pantred", "pantblue", "pantgreen", "pantyellow", "pantgray", "pantpurple", "pantwhite"];
    let property = characterState.pant;

    let index= 0;
    for(let i=0;i<arr.length;i++){
        if(property==arr[i]){
            index=i;
        }
    }   

    return (
        <div className="btns">
            <div className="btndiv">
                <button onClick={()=>previous("pant", index, arr)}>{"<"}</button>
                <div>{characterState.pant}</div>
                <button onClick={()=>next("pant", index, arr)}>{">"}</button>
            </div>
        </div>
    )
}

export default Pant;
