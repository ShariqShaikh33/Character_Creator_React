import React from "react";

const Body=({characterState, previous, next})=>{
    let arr = ["body0", "body1", "body2", "body3", "body4"];
    let property = characterState.body;

    let index= 0;
    for(let i=0;i<arr.length;i++){
        if(property==arr[i]){
            index=i;
        }
    }   

    return (
        <div className="btns">
            <div className="btndiv">
                <button onClick={()=>previous("body", index, arr)}>{"<"}</button>
                <div>{characterState.body}</div>
                <button onClick={()=>next("body", index, arr)}>{">"}</button>
            </div>
        </div>
    )
}

export default Body;
