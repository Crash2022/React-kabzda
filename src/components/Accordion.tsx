import React, {FC, useState} from 'react'
import {AccordionTitle} from "./AccordionTitle"
import {AccordionBody} from "./AccordionBody"
import {Button} from "../UI/Button";

export type AccordionPropsType = {
    title: string
    collapsed?: boolean
}

export const Accordion: FC<AccordionPropsType> = ({title}) => {

    //const collapsed = false;
    let [menuCollapsed, setMenuCollapsed] = useState<boolean>(false);

    const buttonHandlerNotCollapsed = () => {
        //console.log('развернуть')
        setMenuCollapsed(false)
    }
    const buttonHandlerCollapsed = () => {
        //console.log('свернуть')
        setMenuCollapsed(true)
    }

    return (
        <>
            <AccordionTitle title={title}/>
            <Button name={"Развернуть"} callBack={buttonHandlerNotCollapsed}/>
            <Button name={"Свернуть"} callBack={buttonHandlerCollapsed}/>
            { !menuCollapsed && <AccordionBody/> }
        </>
    );
}