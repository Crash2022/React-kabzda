import React, {FC} from 'react'
import {Button} from "../UI/Button"
import {ButtonPropsType} from "../UI/Button"

export type AccordionTitleType = {
    title: string
}

export const AccordionTitle: FC<AccordionTitleType> = ({title}) => {

    return (
        <>
            <h2>{title}</h2>
        </>
    );
}