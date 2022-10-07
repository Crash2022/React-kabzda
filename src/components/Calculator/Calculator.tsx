import React, {ChangeEvent, useMemo, useState} from 'react'

export type CalculatorPropsType = {
    title: string
}

export const Calculator = React.memo((props: CalculatorPropsType) => {

    console.log('Factorial');

    const [firstValue, setFirstValue] = useState<number>(5);
    const [secondValue, setSecondValue] = useState<number>(3);

    let firstResult = 1;

    firstResult = useMemo(() => {
        let tempFirstResult = 1;
        for (let i = 1; i <= firstValue; i++) {
            let fake = 0;
            while (fake < 10000000) {
                fake++;
                const fakeValue = Math.random();
            }
            tempFirstResult = tempFirstResult * i;
        }
        return tempFirstResult;
    }, [firstValue])
    //console.log(firstResult);

    let secondResult = 1;
    for (let i = 1; i <= secondValue; i++) {
        secondResult = secondResult * i;
    }
    //console.log(secondResult);


    return (
        <div style={{marginTop: '20px', marginBottom: '20px'}}>
            {props.title}
            <div>
                <input value={firstValue}
                       onChange={(event: ChangeEvent<HTMLInputElement>) => setFirstValue(+event.currentTarget.value)}/>
            </div>
            <div>
                <input value={secondValue}
                       onChange={(event: ChangeEvent<HTMLInputElement>) => setSecondValue(+event.currentTarget.value)}/>
            </div>

            <div>{firstResult}</div>
            <div>{secondResult}</div>
        </div>

    );
})