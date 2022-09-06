import React, {FC} from 'react'

export type AccordionTitleType = {
    title: string
    collapseMenu: () => void
}

export const AccordionTitle: FC<AccordionTitleType> = ({title, collapseMenu}) => {

    return (
        <>
            <h2 onClick={ ()=> collapseMenu() } style={{minWidth: "250px"}}>{title}</h2>
        </>
    );
}