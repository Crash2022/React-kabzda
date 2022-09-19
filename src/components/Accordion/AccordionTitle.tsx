import React, {FC} from 'react'

export type AccordionTitleType = {
    title: string
    menu1CollapsedControlled: boolean
    setMenu1CollapsedControlled: (value: boolean) => void
}

export const AccordionTitle: FC<AccordionTitleType> = ({title, menu1CollapsedControlled, setMenu1CollapsedControlled}) => {

    return (
        <>
            <h2 onClick={ () => {setMenu1CollapsedControlled(!menu1CollapsedControlled)} }
                style={{minWidth: "250px"}}>
                {title}
            </h2>
        </>
    );
}