import React, {FC, useState} from 'react'
import {AccordionTitle} from "./AccordionTitle"
import {AccordionBody} from "./AccordionBody"

export type AccordionPropsType = {
    title: string
    collapsed?: boolean
    menu1CollapsedControlled: boolean
    setMenu1CollapsedControlled: (value: boolean) => void
}

export const Accordion: FC<AccordionPropsType> = ({title, menu1CollapsedControlled, setMenu1CollapsedControlled}) => {

    let [menu2CollapsedUncontrolled, setMenu2CollapsedUncontrolled] = useState<boolean>(false);

    /*const buttonHandlerCollapsed = () => {
        setMenu2CollapsedUncontrolled(!menu2CollapsedUncontrolled);
    }*/

    return (
        <div style={{margin: "20px 0px"}}>
            <AccordionTitle title={title} collapseMenu={ ()=> setMenu1CollapsedControlled(!menu1CollapsedControlled) }/>
            {/*<AccordionTitle title={title} collapseMenu={buttonHandlerCollapsed}/>*/}
            { !menu1CollapsedControlled ? <AccordionBody/> : '' }
            {/*{ !menu2CollapsedUncontrolled ? <AccordionBody/> : '' }*/}
        </div>
    );
}