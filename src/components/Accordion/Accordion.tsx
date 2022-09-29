import React, {useState} from 'react'
import {AccordionTitle} from "./AccordionTitle"
import {AccordionBody} from "./AccordionBody"
import {v1} from "uuid";

export type AccordionPropsType = {
    title: string
    collapsed: boolean
    setMenu1CollapsedControlled: (value: boolean) => void
}

export type MenuItems = Array<MenuItem>

export type MenuItem = {
    id: string
    title: string
}

export const AccordionMemo: React.FC<AccordionPropsType> = ({title, collapsed, setMenu1CollapsedControlled}) => {

    console.log('accordion');

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

    const onClickHandler = (menuId: string) => {
        console.log('was clicked ' + menuId);
    }

    return (
        <div style={{margin: "20px 0px"}}>
            <AccordionTitle title={title}
                            menu1CollapsedControlled={collapsed}
                            setMenu1CollapsedControlled={setMenu1CollapsedControlled}
            />
            { !collapsed ? <AccordionBody menuItems={menuItems} onClickHandler={onClickHandler}/> : '' }
            {/*<AccordionTitle title={title} collapseMenu={buttonHandlerCollapsed}/>*/}
            {/*{ !menu2CollapsedUncontrolled ? <AccordionBody/> : '' }*/}
        </div>
    );
}