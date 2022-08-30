import React from 'react'

type StarPropsType = {
    selected: boolean
}

export const Star = (props: StarPropsType) => {
        if (props.selected) {
            return <span><b>star</b></span>
        } else {
            return <span>star</span>
        }
}