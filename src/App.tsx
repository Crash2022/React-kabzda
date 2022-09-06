import React, {FC, useState} from 'react'
import './App.css'
import {Accordion} from './components/Accordion'
import {Rating, RatingValuePropsType} from "./components/Rating";

export const App = () => {

    let [rating, setRating] = useState<RatingValuePropsType>(0);

    let [menu1CollapsedControlled, setMenu1CollapsedControlled] = useState<boolean>(false);

    return (
        <div className="App">
            <div className="wrapper">
                <h1 style={{margin: "20px 0px"}}>REACT "Кабзда как просто"</h1>
                <Accordion title={"Меню 1 - контролируемое"}
                           menu1CollapsedControlled={menu1CollapsedControlled}
                           setMenu1CollapsedControlled={setMenu1CollapsedControlled}/>
                {/*<Accordion title={"Меню 2 - неконтролируемое"}/>*/}
                <Rating rating={rating} onClickStar={setRating}/>
            </div>
        </div>
    );
}