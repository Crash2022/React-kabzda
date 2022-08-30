import React, {useState} from 'react'
import {Button} from "../UI/Button";
import {Star} from "./Star";

/*export type RatingPropsType = {
    value: 0 | 1 | 2 | 3 | 4 | 5
}*/

export const Rating = () => {

    const [rating, setRating] = useState(0);

    const addStar = () => {

    }

    return (
        <div style={{marginTop: "20px"}}>
            <h2>Rating</h2>
            <Star selected={}/><Button name={"1"} callBack={addStar}/>
            <Star selected={}/><Button name={"2"} callBack={addStar}/>
            <Star selected={}/><Button name={"3"} callBack={addStar}/>
            <Star selected={}/><Button name={"4"} callBack={addStar}/>
            <Star selected={}/><Button name={"5"} callBack={addStar}/>
        </div>
    );
}