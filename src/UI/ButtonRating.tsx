import React from 'react'

export type ButtonPropsType = {
    name: string
    callBack: (star:number)=>void
}

export const ButtonRating = (props: ButtonPropsType) => {

    const onClickButtonHandler = () => {
        props.callBack(+props.name)
    }

    return (
        <button onClick={onClickButtonHandler}>{props.name}</button>
    );
}