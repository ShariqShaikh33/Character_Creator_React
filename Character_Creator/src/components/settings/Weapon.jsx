import React from "react";

const Weapon=({characterState, previous, next})=>{
    let arr = ["weapon0", "weapon1", "weapon2", "weapon3", "weapon4"];
    let property = characterState.weapon;

    let index= 0;
    for(let i=0;i<arr.length;i++){
        if(property==arr[i]){
            index=i;
        }
    }   

    return (
        <div className="btns">
            <div className="btndiv">
                <button onClick={()=>previous("weapon", index, arr)}>{"<"}</button>
                <div>{characterState.weapon}</div>
                <button onClick={()=>next("weapon", index, arr)}>{">"}</button>
            </div>
        </div>
    )
}

export default Weapon;
