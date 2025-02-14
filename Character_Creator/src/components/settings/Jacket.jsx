import React from "react";

const Jacket=({characterState, previous, next})=>{
    let arr = ["jacketblack", "jacketred", "jacketblue", "jacketgreen", "jacketyellow", "jacketgray", "jacketpurple", "jacketwhite"];
    let property = characterState.jacket;

    let index= 0;
    for(let i=0;i<arr.length;i++){
        if(property==arr[i]){
            index=i;
        }
    }   

    return (
        <div className="btns">
            <div className="btndiv">
                <button onClick={()=>previous("jacket", index, arr)}>{"<"}</button>
                <div>{characterState.jacket}</div>
                <button onClick={()=>next("jacket", index, arr)}>{">"}</button>
            </div>
        </div>
    )
}

export default Jacket;
