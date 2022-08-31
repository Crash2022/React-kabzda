import React from 'react'

type StarPropsType = {
    selected: boolean
}

export const Star = (props: StarPropsType) => {
    /*if (props.selected) {
        return <span><b>star</b></span>
    } else {
        return <span>star</span>
    }*/
    return (
        <>
            { props.selected ? <span><b>star</b></span> : <span>star</span> }
        </>
    )
}