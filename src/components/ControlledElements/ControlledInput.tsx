import React, {ChangeEvent, FC, useState} from 'react'

export type ControlledInputPropsType = {

}

export const ControlledInput: FC<ControlledInputPropsType> = ({}) => {

    const [parentInputValue, setParentInputValue] = useState('');

    const onChangeInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setParentInputValue(event.currentTarget.value);
    }

    return (
        <div style={{margin: "20px 0px"}}>
            <input type="text" value={parentInputValue} onChange={onChangeInputHandler}/>
        </div>
    );
}