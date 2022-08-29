import React, {FC} from 'react';

export type AccordionTitleType = {
    title: string
}

export const AccordionTitle: FC<AccordionTitleType> = ({title}) => {

    return (
        <h2>{title}</h2>
    );
}