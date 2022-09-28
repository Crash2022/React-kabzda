import React, {useReducer, useState} from 'react'
import './App.css'
import {Accordion} from './components/Accordion/Accordion'
import {Rating, RatingValuePropsType} from "./components/Rating/Rating"
import {OnOffSwitcher} from "./components/OnOffSwitcher/OnOffSwitcher"
import {ControlledInput} from "./components/ControlledElements/ControlledInput";
import {ControlledCheckbox} from "./components/ControlledElements/ControlledCheckbox";
import {ControlledSelect} from "./components/ControlledElements/ControlledSelect";
import {Select} from "./components/Select/Select";
import {accordionReducer} from "./components/Accordion/Accordion-reducer";

export const App = () => {

    let [rating, setRating] = useState<RatingValuePropsType>(0);

    //let [menu1CollapsedControlled, setMenu1CollapsedControlled] = useState<boolean>(false);
    let [state, dispatch] = useReducer(accordionReducer, {collapsed: false});

    const [light, setLight] = useState<boolean>(false);

    return (
        <div className="App">
            <div className="wrapper">
                <h1 style={{margin: "20px 0px"}}>REACT "Кабзда как просто"</h1>
                {/*<Accordion title={"Меню 1 - контролируемое"}
                           menu1CollapsedControlled={menu1CollapsedControlled}
                           setMenu1CollapsedControlled={setMenu1CollapsedControlled}
                />*/}
                <Accordion title={"Меню 1 - контролируемое"}
                           collapsed={state.collapsed}
                           setMenu1CollapsedControlled={()=>dispatch({type: 'CHANGE-MENU-COLLAPSE'})}
                />

                {/*<Accordion title={"Меню 2 - неконтролируемое"}/>*/}
                <Rating rating={rating} onClickStar={setRating}/>
                <OnOffSwitcher lightValue={light} lightChange={setLight}/>
                <ControlledInput />
                <ControlledCheckbox />
                <ControlledSelect />
                <Select />
            </div>
        </div>
    );
}