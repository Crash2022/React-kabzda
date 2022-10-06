import React, {ChangeEvent, useMemo, useState} from 'react'
import {CitiesType} from "../../App";
//import {v1} from "uuid";

export type CitiesPropsType = {
    cities: Array<CitiesType>
    countryArray: Array<CitiesType>
    cityStartsArray: Array<CitiesType>
    populationArray: Array<CitiesType>
}

export const Cities = (props: CitiesPropsType) => {

    return (
            <div style={{marginTop: '20px', height: '250px'}}>
                <div style={{marginBottom: '10px'}}>Список городов</div>
                <select>
                    {
                        props.cities.map(city => {
                            return (
                                <option key={city.id}>{city.city}</option>
                            )
                        })
                    }
                </select>

                <div style={{marginBottom: '10px', marginTop: '10px'}}>Города России</div>
                <select>
                    {
                        props.countryArray.map(el => {
                            return (
                                <option key={el.id}>{el.city}</option>
                            )
                        })
                    }
                </select>

                <div style={{marginBottom: '10px', marginTop: '10px'}}>Города на букву Б</div>
                <select>
                    {
                        props.cityStartsArray.map(el => {
                            return (
                                <option key={el.id}>{el.city}</option>
                            )
                        })
                    }
                </select>

                <div style={{marginBottom: '10px', marginTop: '10px'}}>Города "милионники"</div>
                <select>
                    {
                        props.populationArray.map(el => {
                            return (
                                <option key={el.id}>{el.city}</option>
                            )
                        })
                    }
                </select>
            </div>
    );}