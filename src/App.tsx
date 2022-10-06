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
import {CitiesMemo} from "./components/Cities/Cities";
//import {Cities} from "./components/Cities/Cities";
//import {Calculator} from "./components/Calculator/Calculator";


const Accordion = React.memo(AccordionMemo);
const Rating = React.memo(RatingMemo);
const OnOffSwitcher = React.memo(OnOffSwitcherMemo);
const ControlledInput = React.memo(ControlledInputMemo);
const ControlledCheckbox = React.memo(ControlledCheckboxMemo);
const ControlledSelect = React.memo(ControlledSelectMemo);
const Select = React.memo(SelectMemo);
const Calculator = React.memo(CalculatorMemo);
const Cities = React.memo(CitiesMemo);

export type CitiesType = {
    id: number
    country: string,
    city: string,
    population: number
}

export const App = () => {

    //let [menu1CollapsedControlled, setMenu1CollapsedControlled] = useState<boolean>(false);
    let [state, dispatch] = useReducer(accordionReducer, {collapsed: false});

    const[title, setTitle] = useState<string>('Factorial');
    const[counter, setCounter] = useState<number>(0);

    const collapseMenuFunc = useCallback(()=> {
        const collapseMenu = dispatch(collapseMenuAC());
        return collapseMenu;
    }, []);

    const[cities, setCities] = useState<Array<CitiesType>>([
        {id: 1, country: 'Russia', city: 'Orenburg', population: 600000},
        {id: 2, country: 'Russia', city: 'Moscow', population: 10000000},
        {id: 3, country: 'Russia', city: 'Saint-Petersburg', population: 6500000},
        {id: 4, country: 'Belarus', city: 'Minsk', population: 1900000},
        {id: 5, country: 'Belarus', city: 'Brest', population: 1500000},
        {id: 6, country: 'Belarus', city: 'Bobruisk', population: 900000},
        {id: 7, country: 'Kazakhstan', city: 'Alma-ata', population: 2000000},
        {id: 8, country: 'Kazakhstan', city: 'Shimkent', population: 200000},
        {id: 9, country: 'Kazakhstan', city: 'Karaganda', population: 500000},
    ]);

    //const countryArray = cities.filter(el => el.country === 'Russia');
    //const cityStartsArray = cities.filter(el => el.city.toLowerCase().indexOf('urg') > -1);
    //const populationArray = cities.filter(el => el.population >= 2000000);

    const countryArrayProps = useMemo(()=> {
        const countryArray = cities.filter(el => el.country === 'Russia');
        return countryArray;
    }, [])

    const cityStartsArrayProps = useMemo(()=> {
        //const cityStartsArray = cities.filter(el => el.city.toLowerCase().indexOf('urg') > -1);
        const cityStartsArray = cities.filter(el => el.city[0] === 'B');
        return cityStartsArray;
    }, [])

    const populationArrayProps = useMemo(()=> {
        const populationArray = cities.filter(el => el.population >= 2000000);
        return populationArray;
    }, [])

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
                           setMenu1CollapsedControlled={collapseMenuFunc}
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

                <Cities cities={cities}
                        countryArray={countryArrayProps}
                        cityStartsArray={cityStartsArrayProps}
                        populationArray={populationArrayProps}
                />
            </div>
        </div>
    );
}