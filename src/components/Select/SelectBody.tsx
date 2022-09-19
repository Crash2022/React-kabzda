import React, {ChangeEvent, useState} from 'react'
import {SelectItem} from "./Select";
import {IconButton} from "@material-ui/core";
import {Delete} from "@material-ui/icons";

export type SelectBodyPropsType = {
    selectItems: Array<SelectItem>
    //onClickSelectValue: (selectValue: string) => void
}

export const SelectBody: React.FC<SelectBodyPropsType> = (props) => {

    const [parentSelectValue, setParentSelectValue] = useState<string | undefined>('React');

    const onChangeSelectHandler = (event: ChangeEvent<HTMLSelectElement>) => {
        setParentSelectValue(event.currentTarget.value);
        //props.onClickSelectValue(event.currentTarget.value);
    }

    const buttonHandler = () => {console.log('using material UI')}

    return (
        <div>
            <div style={{margin: "10px 0px"}}>
                {parentSelectValue}
            </div>
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
                <IconButton onClick={()=>console.log('material UI')}>
                    <Delete />
                </IconButton>
            </div>
        </div>
    );
}