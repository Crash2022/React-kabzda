import React, {useState} from 'react'
import {Star} from "./Star";

export type RatingValuePropsType = 0 | 1 | 2 | 3 | 4 | 5

export const RatingMemo: React.FC = (props) => {

    console.log('rating');

    const [rating, setRating] = useState<RatingValuePropsType>(0);
    const [ratingCollapsed, setRatingCollapsed] = useState<boolean>(false);

    const ratingHandlerCollapsed = () => {
        setRatingCollapsed(!ratingCollapsed);
    }

    return (
        <div>
            <h2 style={{marginBottom: "10px"}} onClick={ratingHandlerCollapsed}>Rating</h2>

            { ratingCollapsed ?
                <>
                    <Star rating={1} selected={rating > 0} pushStar={setRating}/>
                    <Star rating={2} selected={rating > 1} pushStar={setRating}/>
                    <Star rating={3} selected={rating > 2} pushStar={setRating}/>
                    <Star rating={4} selected={rating > 3} pushStar={setRating}/>
                    <Star rating={5} selected={rating > 4} pushStar={setRating}/>
                    <span>
                    <button style={{marginLeft: "10px"}}
                        onClick={ () => {setRating(0)} }>
                        not rated
                    </button>
                    </span>
                </>
                : ''
            }
        </div>
    );
}