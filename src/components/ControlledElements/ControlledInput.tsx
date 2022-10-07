import React, {ChangeEvent, useState} from 'react'

export const ControlledInput = React.memo (() => {

    console.log('input');

    const [parentInputValue, setParentInputValue] = useState('');

    const onChangeInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setParentInputValue(event.currentTarget.value);
    }

    return (
        <div style={{margin: "20px 0px"}}>
            <input type="text" value={parentInputValue} onChange={onChangeInputHandler}/>
        </div>
    );
})