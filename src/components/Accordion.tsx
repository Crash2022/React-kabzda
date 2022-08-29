import React, {FC} from 'react'
import {AccordionTitle} from "./AccordionTitle"
import {AccordionBody} from "./AccordionBody"
import {Button} from "../UI/Button";

export type AccordionPropsType = {
    title: string
    collapsed?: boolean
}

export const Accordion: FC<AccordionPropsType> = ({title}) => {

    const collapsed = false;

    const buttonHandler = () => {
        //console.log('working')
    }

    return (
        <>
            <AccordionTitle title={title}/>
            <Button name={"Свернуть/Развернуть"} callBack={buttonHandler}/>
            { {collapsed} && <AccordionBody/> }
        </>
    );
}