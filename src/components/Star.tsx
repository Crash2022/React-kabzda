import React from 'react'

type StarPropsType = {
    rating:number
    selected: boolean
    pushStar: (rating:number) => void
}

export const Star = (props: StarPropsType) => {
    /*if (props.selected) {
        return <span><b>star</b></span>
    } else {
        return <span>star</span>
    }*/

    const selectStar = () => {
        props.pushStar(props.rating)
    }
    return (
        <>
            { props.selected
                ? <span style={{marginRight: "5px", cursor: "pointer"}} onClick={selectStar}><b>star</b></span>
                : <span style={{marginRight: "5px", cursor: "pointer"}} onClick={selectStar}>star</span> }
        </>
    )
}