import React, {FC, useState} from 'react'
import {AccordionTitle} from "./AccordionTitle"
import {AccordionBody} from "./AccordionBody"
import {Button} from "../UI/Button";

export type AccordionPropsType = {
    title: string
    collapsed?: boolean
}

export const Accordion: FC<AccordionPropsType> = ({title}) => {

    let [menuCollapsed, setMenuCollapsed] = useState<boolean>(false);

    const buttonHandlerCollapsed = () => {
        //menuCollapsed = !menuCollapsed;
        setMenuCollapsed(!menuCollapsed);
    }

    return (
        <div style={{margin: "20px 0px"}}>
            <AccordionTitle title={title} collapseMenu={buttonHandlerCollapsed}/>
            {/*<Button name={"Toggle"} callBack={buttonHandlerCollapsed}/>*/}
            { !menuCollapsed ? <AccordionBody/> : '' }
        </div>
    );
}