import React, {FC} from 'react'
import {AccordionTitle} from "./AccordionTitle"
import {AccordionBody} from "./AccordionBody"

export type AccordionPropsType = {
    title: string
    collapsed: boolean
}

export const Accordion: FC<AccordionPropsType> = ({title, collapsed}) => {

    return (
        <>
            <AccordionTitle title={title}/>
            { !collapsed && <AccordionBody/> }
        </>
    );
}