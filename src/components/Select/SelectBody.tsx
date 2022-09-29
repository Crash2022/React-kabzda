import React, {ChangeEvent, useState} from 'react'
import {SelectItem} from "./Select";

export type SelectBodyPropsType = {
    selectItems: Array<SelectItem>
}

export const SelectBody: React.FC<SelectBodyPropsType> = (props) => {

    console.log('selectSTUDY body');

    const [parentSelectValue, setParentSelectValue] = useState<string | undefined>('React');

    const onChangeSelectHandler = (event: ChangeEvent<HTMLSelectElement>) => {
        setParentSelectValue(event.currentTarget.value);
    }

    return (
        <div>

            <select value={parentSelectValue} onChange={onChangeSelectHandler}>
                {
                    props.selectItems.map((option, index) => {
                        return (
                            <option key={option.id} value={option.title}>{option.title}</option>
                        )
                    })
                }
            </select>
            <div style={{margin: "10px 0px"}}>
                Вы выбрали: {parentSelectValue}
            </div>
        </div>
    );
}