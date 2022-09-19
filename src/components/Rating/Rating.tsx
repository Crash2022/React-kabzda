import React, {useState} from 'react'
import {Star} from "./Star";

export type RatingValuePropsType = 0 | 1 | 2 | 3 | 4 | 5

type RatingPropsType = {
    rating: RatingValuePropsType
    onClickStar: (value: RatingValuePropsType) => void
}

export const Rating: React.FC<RatingPropsType> = (props) => {

    let [ratingCollapsed, setRatingCollapsed] = useState<boolean>(false);

    const ratingHandlerCollapsed = () => {
        setRatingCollapsed(!ratingCollapsed);
    }

    return (
        <div>
            <h2 style={{marginBottom: "10px"}} onClick={ratingHandlerCollapsed}>Rating</h2>

            { ratingCollapsed ?
                <>
                    <Star rating={1} selected={props.rating > 0} pushStar={props.onClickStar}/>
                    <Star rating={2} selected={props.rating > 1} pushStar={props.onClickStar}/>
                    <Star rating={3} selected={props.rating > 2} pushStar={props.onClickStar}/>
                    <Star rating={4} selected={props.rating > 3} pushStar={props.onClickStar}/>
                    <Star rating={5} selected={props.rating > 4} pushStar={props.onClickStar}/>
                    <span>
                    <button style={{marginLeft: "10px"}}
                        onClick={ () => {props.onClickStar(0)} }>
                        not rated
                    </button>
                    </span>
                </>
                : ''
            }
        </div>
    );
}