import React, {ChangeEvent, useState} from 'react'

export const ControlledCheckbox = React.memo (() => {

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
})