import React, {FC} from 'react'
import './App.css'
import {Accordion} from './components/Accordion'

export const App = () => {

    return (
        <div className="App">
            <h1>REACT "Кабзда как просто"</h1>
            <Accordion title={"Меню 1"} collapsed={false}/>
            <Accordion title={"Меню 2"} collapsed={true}/>
        </div>
    );
}