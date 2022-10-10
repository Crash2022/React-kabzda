import React, {useMemo, useReducer, useState, useCallback, useEffect} from 'react'
import './App.css'
import {Accordion} from './components/Accordion/Accordion'
import {Rating} from "./components/Rating/Rating"
import {OnOffSwitcher} from "./components/OnOffSwitcher/OnOffSwitcher"
import {ControlledInput} from "./components/ControlledElements/ControlledInput";
import {ControlledCheckbox} from "./components/ControlledElements/ControlledCheckbox";
import {ControlledSelect} from "./components/ControlledElements/ControlledSelect";
import {Select} from "./components/Select/Select";
import {accordionReducer, collapseMenuAC} from "./components/Accordion/Accordion-reducer";
import {Calculator} from "./components/Calculator/Calculator";
import {Cities} from "./components/Cities/Cities";
import {v1} from "uuid";
import {Books} from "./components/Books/Books";

export type CitiesType = {
    id: string
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
        {id: v1(), country: 'Russia', city: 'Orenburg', population: 600000},
        {id: v1(), country: 'Russia', city: 'Moscow', population: 10000000},
        {id: v1(), country: 'Russia', city: 'Saint-Petersburg', population: 6500000},
        {id: v1(), country: 'Belarus', city: 'Minsk', population: 1900000},
        {id: v1(), country: 'Belarus', city: 'Brest', population: 1500000},
        {id: v1(), country: 'Belarus', city: 'Bobruisk', population: 900000},
        {id: v1(), country: 'Kazakhstan', city: 'Alma-ata', population: 2000000},
        {id: v1(), country: 'Kazakhstan', city: 'Shimkent', population: 200000},
        {id: v1(), country: 'Kazakhstan', city: 'Karaganda', population: 500000}
    ]);

    // const countryArrayProps = cities.filter(el => el.country === 'Russia');
    // const cityStartsArrayProps = cities.filter(el => el.city.toLowerCase().indexOf('urg') > -1);
    // const populationArrayProps = cities.filter(el => el.population >= 2000000);

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

    /*------------------------------------------------------------*/

    const addCityHandler = () => {
        setCities( [...cities, {id: v1(), country: 'Russia', city: 'Ekaterinburg2', population: 1500000}] );
    }

    const[books, setBooks] = useState(['React', 'JS', 'CSS']);

    const booksArray = useMemo (()=>{
        const booksArray = books.filter( book => book.toLowerCase().indexOf('s') > -1);
        return booksArray;
    },[books])

    // useEffect(()=>{
    //     //setBooks([...books, 'SetBooks']);
    // },[books])

    const addBook = useCallback(() => {
        console.log(books);
        return setBooks([...books, 'SetBooks']);
    },[books])

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

                <button onClick={addCityHandler} style={{marginBottom: '30px'}}>Add city</button>

                <Books books={books} addBook={addBook} booksArray={booksArray}/>
            </div>
        </div>
    );
}