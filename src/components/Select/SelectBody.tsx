import React, {ChangeEvent, FC, useState} from 'react'
import {SelectItem} from "./Select";

export type SelectBodyPropsType = {
    selectItems: Array<SelectItem>
    //onClickSelectValue: (selectValue: string) => void
}

export const SelectBody: FC<SelectBodyPropsType> = (props) => {

    const [parentSelectValue, setParentSelectValue] = useState<string | undefined>('3');

    const onChangeSelectHandler = (event: ChangeEvent<HTMLSelectElement>) => {
        setParentSelectValue(event.currentTarget.value);
        //props.onClickSelectValue(event.currentTarget.value);
    }

    return (
        <div>
            <div style={{margin: "10px 0px"}}>
                {parentSelectValue}
                .value
            </div>
            <select value={parentSelectValue} onChange={onChangeSelectHandler}>
                {
                    props.selectItems.map((option, index) => {
                        return (
                            <option key={option.id} value={index+1}>{option.title}</option>
                        )
                    })
                }
            </select>
        </div>
    );
}