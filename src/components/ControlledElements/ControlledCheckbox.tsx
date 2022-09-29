import React, {ChangeEvent, useState} from 'react'

export const ControlledCheckboxMemo = () => {

    console.log('checkbox');

    const [parentCheckboxValue, setParentCheckboxValue] = useState<boolean>(true);

    const onChangeCheckboxHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setParentCheckboxValue(event.currentTarget.checked);
    }

    return (
        <div style={{margin: "20px 0px"}}>
            <input type="checkbox" checked={parentCheckboxValue} onChange={onChangeCheckboxHandler}/>
        </div>
    );
}