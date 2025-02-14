import React from "react";

const Hair=({characterState, previous, next})=>{
    let arr = ["hairblack", "hairdarkgray", "hairbrown", "hairblonde", "hairlightgray", "hairwhite"];
    let property = characterState.hair;

    let index= 0;
    for(let i=0;i<arr.length;i++){
        if(property==arr[i]){
            index=i;
        }
    }

    return (
        <div className="btns">
            <div className="btndiv">
                <button onClick={()=>previous("hair", index, arr)}>{"<"}</button>
                <div>{characterState.hair}</div>
                <button onClick={()=>next("hair", index, arr)}>{">"}</button>
            </div>
        </div>
    )
}

export default Hair;
