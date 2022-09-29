import React from 'react'

export type AccordionTitleType = {
    title: string
    menu1CollapsedControlled: boolean
    setMenu1CollapsedControlled: () => void
}

export const AccordionTitle: React.FC<AccordionTitleType> = ({title, menu1CollapsedControlled, setMenu1CollapsedControlled}) => {

    console.log('accordionTitle');

    return (
        <>
            <h2 onClick={ () => {setMenu1CollapsedControlled()} }
                style={{minWidth: "250px"}}>
                {title}
            </h2>
        </>
    );
}