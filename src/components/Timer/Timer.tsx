import React, {useEffect, useState} from 'react'


export const Timer = React.memo (() => {

    console.log('Timer');

    const[timer, setTimer] = useState<number>(0);

    useEffect(()=>{
        const tick: number = window.setInterval(()=> {
            setTimer(state => state+1);
        }, 1000);
        return () => {
            clearInterval(tick);
        };
    },[])

    return (
        <div style={{margin: "20px 0px"}}>
            {timer}
        </div>
    );
})