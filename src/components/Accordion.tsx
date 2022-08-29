import React, {FC} from 'react';
import {AccordionTitle} from "./AccordionTitle";
import {AccordionBody} from "./AccordionBody";

export type AccordionPropsType = {
    title: string
}

export const Accordion: FC<AccordionPropsType> = ({title}) => {

    return (
        <>
            <AccordionTitle title={title}/>
            <AccordionBody/>
        </>
    );
}