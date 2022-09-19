import React, {useState} from 'react'
import {v1} from "uuid";
import {SelectBody} from "./SelectBody";

export type SelectItem = {
    id: string
    title: string
}

export const Select = () => {

    const [selectItems, setSelectItems] = useState<Array<SelectItem>>([
        {id: v1(), title: 'HTML'},
        {id: v1(), title: 'CSS'},
        {id: v1(), title: 'JavaScript'},
        {id: v1(), title: 'React'},
        {id: v1(), title: 'Angular'}
    ])

    /*const onClickSelectValue = (selectValue: string) => {
        console.log('selected value ' + selectValue);
    }*/

    return (
        <div style={{margin: "20px 0px"}}>
            <div style={{margin: "10px 0px"}}>Любимая тема для изучения</div>
            <SelectBody selectItems={selectItems} />
        </div>
    );
}