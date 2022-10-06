import React, {useMemo, useReducer, useState, useCallback} from 'react'
import './App.css'
import {AccordionMemo} from './components/Accordion/Accordion'
import {RatingMemo, RatingValuePropsType} from "./components/Rating/Rating"
import {OnOffSwitcherMemo} from "./components/OnOffSwitcher/OnOffSwitcher"
import {ControlledInputMemo} from "./components/ControlledElements/ControlledInput";
import {ControlledCheckboxMemo} from "./components/ControlledElements/ControlledCheckbox";
import {ControlledSelectMemo} from "./components/ControlledElements/ControlledSelect";
import {SelectMemo} from "./components/Select/Select";
import {accordionReducer, collapseMenuAC} from "./components/Accordion/Accordion-reducer";
import {CalculatorMemo} from "./components/Calculator/Calculator";
//import {Calculator} from "./components/Calculator/Calculator";


const Accordion = React.memo(AccordionMemo);
const Rating = React.memo(RatingMemo);
const OnOffSwitcher = React.memo(OnOffSwitcherMemo);
const ControlledInput = React.memo(ControlledInputMemo);
const ControlledCheckbox = React.memo(ControlledCheckboxMemo);
const ControlledSelect = React.memo(ControlledSelectMemo);
const Select = React.memo(SelectMemo);
const Calculator = React.memo(CalculatorMemo);

export const App = () => {

    //let [menu1CollapsedControlled, setMenu1CollapsedControlled] = useState<boolean>(false);
    let [state, dispatch] = useReducer(accordionReducer, {collapsed: false});

    const[title, setTitle] = useState<string>('Factorial');
    const[counter, setCounter] = useState<number>(0);

    const collapseMenu1 = useCallback(()=> {
        const collapseMenu = dispatch(collapseMenuAC());
        return collapseMenu;
    }, []);

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
                           /*setMenu1CollapsedControlled={() => dispatch(collapseMenuAC())}*/
                           setMenu1CollapsedControlled={collapseMenu1}
                />

                {/*<Accordion title={"Меню 2 - неконтролируемое"}/>*/}
                <Rating/>
                <OnOffSwitcher/>
                <ControlledInput/>
                <ControlledCheckbox/>
                <ControlledSelect/>
                <Select/>
                <Calculator title={title}/>

                <button onClick={()=>setCounter(counter+1)}>+</button>
                {counter}
            </div>
        </div>
    );
}