import React, {FC} from 'react'

export type AccordionTitleType = {
    title: string
    collapseMenu: () => void
}

export const AccordionTitle: FC<AccordionTitleType> = ({title, collapseMenu}) => {

    return (
        <>
            <h2 onClick={collapseMenu}>{title}</h2>
        </>
    );
}