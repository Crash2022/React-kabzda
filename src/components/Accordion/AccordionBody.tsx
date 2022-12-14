import React from 'react'
import {MenuItem} from "./Accordion";

export type AccordionBodyPropsType = {
    menuItems: Array<MenuItem>
    onClickHandler: (menuId: string) => void
}

export const AccordionBody: React.FC<AccordionBodyPropsType> = (props) => {

    console.log('accordionBody');

    return (
        <ul>
            {
                props.menuItems.map(item => {
                    return (
                        <li key={item.id} onClick={()=> props.onClickHandler(item.id)}>{item.title}</li>
                    )
                })
            }
        </ul>
    );
}