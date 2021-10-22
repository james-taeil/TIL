# TypeScript 기본타입

## 문자열, 숫자, 배열, 객체, 튜플
TS 기본 타입 설정
```ts
// 문자열
let car: string = 'bmw';

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
```

## 열거(enum)
열거로 집합체로 사용 할 수 있다.
```ts
// enum 선언
enum User {Kim, Park, Choi}
let a: User = User.Kim;

// 값 설정
enum User2 {Kim = 19, Park = 20}
let userage: User2 = User2.Park;

// User 집합에 바로 접근
let username: string = User[2];

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

일반 객체 형태랑 같음
const Os2 = {
    Window = 'window',
    Ios = 'Ios',
    Android = 'Android'
}

let myOs: Os;
myOs = Os.Android;
```

## Any
알지 못하는 타입을 표현할 때 주로 쓴다.
```ts
let kimcoding: any = 'kimMan';
```

## Void, Never
void: 아무것도 반환하지 않을 때
never: 에러 반환하거나 무한루프일 경우
```ts
const test = () => {
    let hi: string = 'hi';
    return hi;
}

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
```

## null, undefined
```ts
// null, undefined
let nullTest:null = null;
let undefinedTest:undefined = undefined;
```

## Object
```ts
declare function car(name: string | price: number| obj: object): void;

car(42) // good
car('bmw') // good

car(null) // error
car(false) // error
car(undefined) // error
```

## 타입 선언
TypeScript를 JSX와 함께 사용할 때는,as-스타일 허용
```ts
// 일반적인 스타일
let car: any = 'bmw';
let carLength: number = (<string>car).length;

// as 스타일
let str: any = 'test string';
let strLength: number = (str as string).length;
```