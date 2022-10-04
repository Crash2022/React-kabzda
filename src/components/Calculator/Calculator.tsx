import React, {ChangeEvent, useMemo, useState} from 'react'

export const Calculator = () => {

    const [firstValue, setFirstValue] = useState<number>(5);
    const [secondValue, setSecondValue] = useState<number>(3);

    let firstResult = 1;
    let secondResult = 1;

    useMemo(()=> {
        for (let i = 1; i <= firstValue; i++) {
            let fake = 0;
            while (fake < 10000000) {
                fake++;
                const fakeValue = Math.random();
            }
            firstResult = firstResult * i;
        }
    }, [firstValue])

    console.log(firstResult);

    for (let i = 1; i <= secondValue; i++) {
        secondResult = secondResult * i;
    }
    console.log(secondResult);

    return (
        <div>
            Factorial
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
}