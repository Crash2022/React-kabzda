import React from 'react'
import {MenuItem} from "./Accordion";

export type AccordionBodyPropsType = {
    menuItems: Array<MenuItem>
}

export const AccordionBody: React.FC<AccordionBodyPropsType> = (props) => {

    return (
        <ul>
            {
                props.menuItems.map(item => {
                    return (
                        <li key={item.id}>{item.title}</li>
                    )
                })
            }
        </ul>
    );
}