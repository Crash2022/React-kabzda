// 1. Функция sum принимает параметром целые положительные
// числа (неопределённое кол-во) и возвращает их сумму (rest).

export function sum(...nums: Array<number>): number {
    // console.log(nums)
    //...здесь пишем код.
    // В return стоит "заглушка", чтоб typescript не ругался

    let numsArr = [...nums];
    let sum = 0;
    for (let i = 0; i < numsArr.length; i++) {
        sum = sum + numsArr[i];
    }
    return sum;
}

// 2. Функция getTriangleType принимает три параметра:
// длины сторон треугольника.
// Функция должна возвращать:
//  - "10", если треугольник равносторонний,
//  - "01", если треугольник равнобедренный,
//  - "11", если треугольник обычный,
//  - "00", если такого треугольника не существует.

export function getTriangleType(a: number,b: number,c: number): string {
    //...здесь пишем код.
    // В return стоит "заглушка", чтоб typescript не ругался

    if ( (a < b+c) && (b < c+a) && (c < a+b) ) {
        if (a === b && b === c) {
            return "10"
        } else if (a === b || b === c || c === a){
            return "01"
        } else {
            return "11"
        }
    } else {
        return "00"
    }
}

// 3. Функция getSum принимает параметром целое число и возвращает
// сумму цифр этого числа

export function getSum(number: number): number{
    //...здесь пишем код.
    // В return стоит "заглушка", чтоб typescript не ругался

    let numbers = String(number);
    let stringArr = numbers.split('');

    let numbersArr = [];
    for (let i = 0; i < stringArr.length; i++) {
        numbersArr.push(parseInt(stringArr[i]));
    }

    let sum = 0;
    for (let j = 0; j < numbersArr.length; j++) {
        sum = sum + numbersArr[j];
    }

    return sum;
}

// 4. Функция isEvenIndexSumGreater принимает  параметром массив чисел.
// Если сумма чисел с чётными ИНДЕКСАМИ!!! (0 как чётный индекс) больше
// суммы чисел с нечётными ИНДЕКСАМИ!!!, то функция возвращает true.
// В противном случае - false.

export const isEvenIndexSumGreater = (arr: Array<number>): boolean => {
    //...здесь пишем код.
    // В return стоит "заглушка", чтоб typescript не ругался

    let evenSum = 0; // чётное
    let oddSum = 0; // нечётное

    for (let i = 0; i < arr.length; i++) {
        evenSum = evenSum + arr[i];
        i++;
    }

    for (let j = 1; j < arr.length; j++) {
        oddSum = oddSum + arr[j];
        j++;
    }

    if (evenSum > oddSum) {
        return true;
    } else {
        return false;
    }
}

// 5. Функция getSquarePositiveIntegers принимает параметром массив чисел и возвращает новый массив. 
// Новый массив состоит из квадратов целых положительных чисел, котрые являются элементами исходгого массива.
// Исходный массив не мутирует.


export function getSquarePositiveIntegers(array: Array<number>): Array<number> {
    //...здесь пишем код.
    // В return стоит "заглушка", чтоб typescript не ругался

    let newArr = [...array];
    let squareArr = [];

    for (let i = 0; i < newArr.length; i++) {
        if (newArr[i] > 0 && Number.isInteger(newArr[i])) {
            squareArr.push(Math.pow(newArr[i],2));
        }
    }
    return squareArr;
}

// 6. Функция принимает параметром целое не отрицательное число N и возвращает сумму всех чисел от 0 до N включительно
// Попробуйте реализовать функцию без использования перебирающих методов.

export function sumFirstNumbers(N: number): number {
    //...здесь пишем код.
    // В return стоит "заглушка", чтоб typescript не ругался

    let sum = 0;
    for (let i = 0; i <= N; i++) {
        sum = sum + i;
    }
    return sum;
}

// ...и "лапку" вверх!!!!


// Д.З.:
// 7. Функция-банкомат принимает параметром целое натуральное число (сумму).
// Возвращает массив с наименьшим количеством купюр, которыми можно выдать эту
// сумму. Доступны банкноты следующих номиналов:
// const banknotes = [1000, 500, 100, 50, 20, 10, 5, 2, 1].
// Считаем, что количество банкнот каждого номинала не ограничено

export function getBanknoteList(amountOfMoney: number): Array<number> {
    //...здесь пишем код.
    // В return стоит "заглушка", чтоб typescript не ругался
    const banknotes = [1000, 500, 100, 50, 20, 10, 5, 2, 1];
    let resultArray = [];

    for (let i = 0; i < banknotes.length; i++) {
        let note = banknotes[i];

        while (amountOfMoney - note >= 0) {
            amountOfMoney = amountOfMoney - note;
            resultArray.push(note);
        }
    }
    return resultArray;

}