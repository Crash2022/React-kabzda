import React, {FC, useState} from 'react'
import './App.css'
import {Accordion} from './components/Accordion'
import {Rating, RatingValuePropsType} from "./components/Rating";

export const App = () => {

    let [rating, setRating] = useState<RatingValuePropsType>(0);

    return (
        <div className="App">
            <div className="wrapper">
                <h1 style={{margin: "20px 0px"}}>REACT "Кабзда как просто"</h1>
                <Accordion title={"Меню 1"}/>
                <Accordion title={"Меню 2"}/>
                <Rating rating={rating} onClickStar={setRating}/>
            </div>
        </div>
    );
}