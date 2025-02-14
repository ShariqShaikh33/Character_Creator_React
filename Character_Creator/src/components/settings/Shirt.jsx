import React from "react";

const Shirt=({characterState, previous, next})=>{
    let arr = ["shirtblack", "shirtred", "shirtblue", "shirtgreen", "shirtyellow", "shirtgray", "shirtpurple", "shirtwhite"];
    let property = characterState.shirt;

    let index= 0;
    for(let i=0;i<arr.length;i++){
        if(property==arr[i]){
            index=i;
        }
    }   

    return (
        <div className="btns">
            <div className="btndiv">
                <button onClick={()=>previous("shirt", index, arr)}>{"<"}</button>
                <div>{characterState.shirt}</div>
                <button onClick={()=>next("shirt", index, arr)}>{">"}</button>
            </div>
        </div>
    )
}

export default Shirt;
