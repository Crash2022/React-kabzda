import React from 'react'
import styles from './OnOffSwitcher.module.css'

export type SwitcherLightPropsType = {
    lightValue: boolean
    lightChange: (valueLight: boolean)=> void
}

export const OnOffSwitcher = (props: SwitcherLightPropsType) => {

    const switcherOn = `${props.lightValue && styles.on}`
    const switcherOff = `${!props.lightValue && styles.off}`

    const onClickHandler = () => {
        props.lightChange(!props.lightValue)
    }

    return (
        <div className={styles.switcherMain}>
            <div className={`${styles.base} ${switcherOn}`} onClick={onClickHandler}>On</div>
            <div className={`${styles.base} ${switcherOff}`} onClick={onClickHandler}>Off</div>
            <div className={`${styles.light} ${switcherOn} ${switcherOff}`}></div>
        </div>
    )
}