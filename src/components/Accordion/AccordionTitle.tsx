import React from 'react'

export type AccordionTitleType = {
    title: string
    menu1CollapsedControlled: boolean
    setMenu1CollapsedControlled: (value: boolean) => void
}

export const AccordionTitle: React.FC<AccordionTitleType> = ({title, menu1CollapsedControlled, setMenu1CollapsedControlled}) => {

    console.log('accordionTitle');

    return (
        <>
            <h2 onClick={ () => {setMenu1CollapsedControlled(!menu1CollapsedControlled)} }
                style={{minWidth: "250px"}}>
                {title}
            </h2>
        </>
    );
}