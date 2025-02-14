import React from "react";

const Shoes=({characterState, previous, next})=>{
    let arr = ["shoesblack", "shoesred", "shoesblue", "shoesgreen", "shoesyellow", "shoesgray", "shoespurple", "shoeswhite"];
    let property = characterState.shoes;

    let index= 0;
    for(let i=0;i<arr.length;i++){
        if(property==arr[i]){
            index=i;
        }
    }   

    return (
        <div className="btns">
            <div className="btndiv">
                <button onClick={()=>previous("shoes", index, arr)}>{"<"}</button>
                <div>{characterState.shoes}</div>
                <button onClick={()=>next("shoes", index, arr)}>{">"}</button>
            </div>
        </div>
    )
}

export default Shoes;
