// 문자열
let car: string = 'bmw';

// car = 3; // error

// 숫자
let age: number = 30;
// boolean
let isCar: boolean = true;

// 숫자 배열
let arr: number[] = [1,2,3];
let arr2: Array<number> = [1,2,3];
//문자열 배열
let arr3: string[] = ['a', 'b', 'c'];

// 객체
let obj: object = {name : 'test', age: 13};


// 튜플
let b: [string, number];
b = ['z', 1];
// b = [1, 'z']; //error

b[0].toLowerCase();
// b[1].toLowerCase(); // error


// void, never => void: 아무것도 반환하지 않을 때 || never: 에러 반환하거나 무한루프일 경우
const test1 = (): void => {
    console.log('test');
}

const test2 = (): never => {
    throw new Error();
}

const test3 = (): never => {
    while (true) {
        // do something..
    }
}

// enum: 비슷한 값끼리 묶을 때
enum Os {
    Window = 3,
    Ios = 10,
    Android
}
 
console.log(Os[10]); // "Ios"
console.log(Os['Ios']); //10


enum Os2 {
    Window = 'window',
    Ios = 'Ios',
    Android = 'Android'
}
// 일반 객체 형태랑 같음
// const Os2 = {
//     Window = 'window',
//     Ios = 'Ios',
//     Android = 'Android'
// }

let myOs: Os;
myOs = Os.Android;


// null, undefined
let nullTest:null = null;
let undefinedTest:undefined = undefined;

