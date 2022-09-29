import React, {ChangeEvent, useState} from 'react'

export const ControlledSelectMemo = () => {

    console.log('select');

    const [parentSelectValue, setParentSelectValue] = useState<string | undefined>('3');

    const onChangeSelectHandler = (event: ChangeEvent<HTMLSelectElement>) => {
        setParentSelectValue(event.currentTarget.value);
    }

    return (
        <div style={{margin: "20px 0px"}}>
            <select value={parentSelectValue} onChange={onChangeSelectHandler}>
                <option value={"1"}>1</option>
                <option value={"2"}>2</option>
                <option value={"3"}>3</option>
            </select>
        </div>
    );
}