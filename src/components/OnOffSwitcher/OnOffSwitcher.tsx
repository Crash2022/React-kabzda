import React, {useState} from 'react'
import styles from './OnOffSwitcher.module.css'

export const OnOffSwitcher = React.memo ((props) => {

    console.log('OnOffSwitcher');

    const [light, setLight] = useState<boolean>(false);

    const switcherOn = `${light && styles.on}`
    const switcherOff = `${!light && styles.off}`

    const onClickHandler = () => {
        setLight(!light);
    }

    return (
        <div className={styles.switcherMain}>
            <div className={`${styles.base} ${switcherOn}`} onClick={onClickHandler}>On</div>
            <div className={`${styles.base} ${switcherOff}`} onClick={onClickHandler}>Off</div>
            <div className={`${styles.light} ${switcherOn} ${switcherOff}`}></div>
        </div>
    )
})