import React, {FC, useState} from 'react'
import {AccordionTitle} from "./AccordionTitle"
import {AccordionBody} from "./AccordionBody"
import {v1} from "uuid";

export type AccordionPropsType = {
    title: string
    collapsed?: boolean
    menu1CollapsedControlled: boolean
    setMenu1CollapsedControlled: (value: boolean) => void
}

export type MenuItems = Array<MenuItem>

export type MenuItem = {
    id: string
    title: string
}

export const Accordion: FC<AccordionPropsType> = ({title, menu1CollapsedControlled, setMenu1CollapsedControlled}) => {

    /*let [menu2CollapsedUncontrolled, setMenu2CollapsedUncontrolled] = useState<boolean>(false);*/

    /*const buttonHandlerCollapsed = () => {
        setMenu2CollapsedUncontrolled(!menu2CollapsedUncontrolled);
    }*/

    const [menuItems, setMenuItems] = useState<MenuItems>([
        {id: v1(), title: 'Меню 1'},
        {id: v1(), title: 'Меню 2'},
        {id: v1(), title: 'Меню 3'},
        {id: v1(), title: 'Меню 4'},
        {id: v1(), title: 'Меню 5'},
    ])

    return (
        <div style={{margin: "20px 0px"}}>
            <AccordionTitle title={title}
                            menu1CollapsedControlled={menu1CollapsedControlled}
                            setMenu1CollapsedControlled={setMenu1CollapsedControlled}
            />
            { !menu1CollapsedControlled ? <AccordionBody menuItems={menuItems}/> : '' }
            {/*<AccordionTitle title={title} collapseMenu={buttonHandlerCollapsed}/>*/}
            {/*{ !menu2CollapsedUncontrolled ? <AccordionBody/> : '' }*/}
        </div>
    );
}