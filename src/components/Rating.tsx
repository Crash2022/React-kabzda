import React, {useState} from 'react'
import {ButtonRating} from "../UI/ButtonRating";
import {Star} from "./Star";

/*export type RatingPropsType = {
    value: 0 | 1 | 2 | 3 | 4 | 5
}*/

export const Rating = () => {

    let [rating, setRating] = useState(0);

    const addStar = (star:number) => {
        setRating(star);
    }

    return (
        <div>
            <h2 style={{marginBottom: "10px"}}>Rating</h2>
            <Star selected={rating > 0}/><ButtonRating name={"1"} callBack={addStar}/>
            <Star selected={rating > 1}/><ButtonRating name={"2"} callBack={addStar}/>
            <Star selected={rating > 2}/><ButtonRating name={"3"} callBack={addStar}/>
            <Star selected={rating > 3}/><ButtonRating name={"4"} callBack={addStar}/>
            <Star selected={rating > 4}/><ButtonRating name={"5"} callBack={addStar}/>
            <span><button style={{marginLeft: "10px"}} onClick={()=>{setRating(0)}}>not rated</button></span>
        </div>
    );
}