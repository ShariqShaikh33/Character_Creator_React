import React from "react";
import Body from "./settings/Body";
import Hair from "./settings/Hair";
import Eyes from "./settings/Eyes";
import Jacket from "./settings/Jacket";
import Shirt from "./settings/Shirt";
import Weapon from "./settings/Weapon";
import Pant from "./settings/Pant";
import Shoes from "./settings/Shoes";

const Settings = ({update, characterState} ) =>{

    
    const previous=(prop,index,arr)=>{
        console.log("Prev");
        if(index!=0){
            index=index-1;
            update({...characterState, [prop] : arr[index]})
        }
        else if(index==0){
            index=arr.length-1;
            update({...characterState, [prop] : arr[index]})
        }
    }
    const next=(prop,index,arr)=>{
        if(index!=arr.length-1){
            index=index+1;
            update({...characterState, [prop] : arr[index]})
        }
        else if(index==arr.length-1){
            index=0;
            update({...characterState, [prop] : arr[index]})
        }
    }

    return (
        <div>
            <Body characterState={characterState} previous={previous} next={next}/>
            <Hair characterState={characterState} previous={previous} next={next}/>
            <Eyes characterState={characterState} previous={previous} next={next}/>
            <Jacket characterState={characterState} previous={previous} next={next}/>
            <Shirt characterState={characterState} previous={previous} next={next}/>
            <Weapon characterState={characterState} previous={previous} next={next}/>
            <Pant characterState={characterState} previous={previous} next={next}/>
            <Shoes characterState={characterState} previous={previous} next={next}/>

        </div>
    )
}
export default Settings;