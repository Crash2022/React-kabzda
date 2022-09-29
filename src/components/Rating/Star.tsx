import React from 'react'
import {RatingValuePropsType} from "./Rating";

type StarPropsType = {
    rating: RatingValuePropsType
    selected: boolean
    pushStar: (value: RatingValuePropsType) => void
}

export const Star: React.FC<StarPropsType> = (props) => {

    console.log('ratingStar');

    const selectStarHandler = () => {
        props.pushStar(props.rating)
    }

    return (
        <>
            { props.selected
                ? <span style={{marginRight: "5px", cursor: "pointer"}} onClick={selectStarHandler}><b>star</b></span>
                : <span style={{marginRight: "5px", cursor: "pointer"}} onClick={selectStarHandler}>star</span> }
        </>
    )
}