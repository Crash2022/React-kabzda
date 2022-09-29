import React, {useReducer} from 'react'
import './App.css'
import {AccordionMemo} from './components/Accordion/Accordion'
import {RatingMemo, RatingValuePropsType} from "./components/Rating/Rating"
import {OnOffSwitcherMemo} from "./components/OnOffSwitcher/OnOffSwitcher"
import {ControlledInputMemo} from "./components/ControlledElements/ControlledInput";
import {ControlledCheckboxMemo} from "./components/ControlledElements/ControlledCheckbox";
import {ControlledSelectMemo} from "./components/ControlledElements/ControlledSelect";
import {SelectMemo} from "./components/Select/Select";
import {accordionReducer, collapseMenuAC} from "./components/Accordion/Accordion-reducer";


const Accordion = React.memo(AccordionMemo);
const Rating = React.memo(RatingMemo);
const OnOffSwitcher = React.memo(OnOffSwitcherMemo);
const ControlledInput = React.memo(ControlledInputMemo);
const ControlledCheckbox = React.memo(ControlledCheckboxMemo);
const ControlledSelect = React.memo(ControlledSelectMemo);
const Select = React.memo(SelectMemo);

export const App = () => {

    //let [menu1CollapsedControlled, setMenu1CollapsedControlled] = useState<boolean>(false);
    let [state, dispatch] = useReducer(accordionReducer, {collapsed: false});

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
                           setMenu1CollapsedControlled={()=>dispatch(collapseMenuAC())}
                />

                {/*<Accordion title={"Меню 2 - неконтролируемое"}/>*/}
                <Rating />
                <OnOffSwitcher />
                <ControlledInput />
                <ControlledCheckbox />
                <ControlledSelect />
                <Select />
            </div>
        </div>
    );
}